package main

import (
	"crypto/sha256"
	"encoding/hex"
	"net"
	"net/http"
	"os"
	"os/exec"
	"strings"
)

// GetLocalIPAddress получает локальный IP-адрес устройства
func GetLocalIPAddress() string {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		// Если не удалось подключиться, пробуем получить через интерфейсы
		addrs, err := net.InterfaceAddrs()
		if err != nil {
			return ""
		}
		for _, addr := range addrs {
			ipNet, ok := addr.(*net.IPNet)
			if ok && !ipNet.IP.IsLoopback() && ipNet.IP.To4() != nil {
				if isLocalIP(ipNet.IP.String()) {
					return ipNet.IP.String()
				}
			}
		}
		return ""
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)
	return localAddr.IP.String()
}

// isLocalIP проверяет, является ли IP локальным
func isLocalIP(ipStr string) bool {
	ip := net.ParseIP(ipStr)
	if ip == nil {
		return false
	}
	return ip.IsLoopback() ||
		ip.IsLinkLocalUnicast() ||
		ip.IsPrivate() ||
		strings.HasPrefix(ipStr, "192.168.") ||
		strings.HasPrefix(ipStr, "10.")
}

// GetClientIP получает IP-адрес клиента из запроса
func GetClientIP(r *http.Request) string {
	// Сначала проверяем X-Forwarded-For заголовок (если используется прокси)
	xff := r.Header.Get("X-Forwarded-For")
	if xff != "" {
		// X-Forwarded-For может содержать несколько IP через запятую
		ips := strings.Split(xff, ",")
		if len(ips) > 0 {
			return strings.TrimSpace(ips[0])
		}
	}

	// Затем проверяем X-Real-IP
	xri := r.Header.Get("X-Real-IP")
	if xri != "" {
		return xri
	}

	// Иначе используем RemoteAddr
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return host
}

// GetDeviceHashFromIP получает хэш устройства по IP-адресу
// Сначала пытается найти MAC-адрес через ARP таблицу, затем использует IP
func GetDeviceHashFromIP(clientIP string) string {
	// Пробуем найти MAC-адрес по IP через ARP таблицу
	mac := getMACByIP(clientIP)

	// Если MAC найден, используем его для хэша
	if mac != "" {
		return hashString(mac)
	}

	// Иначе используем IP-адрес для хэша
	return hashString(clientIP)
}

// getMACByIP получает MAC-адрес по IP из ARP таблицы
func getMACByIP(ip string) string {
	// Метод 1: Читаем /proc/net/arp (Linux)
	data, err := os.ReadFile("/proc/net/arp")
	if err == nil {
		lines := strings.Split(string(data), "\n")
		for _, line := range lines[1:] { // Пропускаем заголовок
			fields := strings.Fields(line)
			if len(fields) >= 4 {
				if fields[0] == ip {
					mac := fields[3]
					if mac != "00:00:00:00:00:00" && mac != "<incomplete>" {
						return mac
					}
				}
			}
		}
	}

	// Метод 2: Пробуем выполнить команду arp (если доступна)
	cmd := exec.Command("arp", "-a")
	output, err := cmd.Output()
	if err == nil {
		lines := strings.Split(string(output), "\n")
		for _, line := range lines {
			// Парсим строки вида: hostname (192.168.1.1) at aa:bb:cc:dd:ee:ff
			if strings.Contains(line, ip) && strings.Contains(line, " at ") {
				parts := strings.Fields(line)
				if len(parts) >= 4 {
					ipFromArp := strings.Trim(parts[1], "()")
					if ipFromArp == ip {
						mac := parts[3]
						if mac != "00:00:00:00:00:00" {
							return mac
						}
					}
				}
			}
		}
	}

	return ""
}

// hashString создает SHA256 хэш из строки и возвращает первые 16 символов
func hashString(s string) string {
	hash := sha256.Sum256([]byte(s))
	return hex.EncodeToString(hash[:8]) // Первые 16 символов (8 байт)
}

// EnableCORS включает CORS для запроса
func EnableCORS(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// origin := r.Header.Get("Origin")
	// // Для разработки разрешаем все localhost порты
	// if origin != "" && (strings.HasPrefix(origin, "http://localhost:") ||
	// 	strings.HasPrefix(origin, "http://127.0.0.1:") ||
	// 	strings.HasPrefix(origin, "https://localhost:") ||
	// 	strings.HasPrefix(origin, "https://127.0.0.1:")) {
	// 	w.Header().Set("Access-Control-Allow-Origin", origin)
	// 	w.Header().Set("Access-Control-Allow-Credentials", "true")
	// } else if origin != "" {
	// 	// Для других origins тоже разрешаем (для локальной сети)
	// 	// w.Header().Set("Access-Control-Allow-Origin", origin)
	// 	w.Header().Set("Access-Control-Allow-Origin", "*")
	// } else {
	// 	// Если origin не указан, разрешаем все
	// 	w.Header().Set("Access-Control-Allow-Origin", "*")
	// }

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, X-User-Hash")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS")
	w.Header().Set("Access-Control-Max-Age", "3600")
}

// GetCacheControlForPath возвращает подходящий Cache-Control заголовок для пути
func GetCacheControlForPath(path string) string {
	// index.html, service worker, и manifest должны всегда ревалидироваться
	if path == "/" || path == "/index.html" ||
		strings.HasSuffix(path, "flutter_service_worker.js") ||
		strings.HasSuffix(path, "manifest.json") {
		return "no-cache"
	}

	// Все остальные статические файлы получают долгосрочное кэширование
	return "public, max-age=31536000, immutable"
}

// cacheControlMiddleware wraps an http.Handler and sets Cache-Control headers
func cacheControlMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path

		// Determine and set Cache-Control header based on path
		cacheControl := GetCacheControlForPath(path)
		w.Header().Set("Cache-Control", cacheControl)

		// Call the next handler in the chain
		next.ServeHTTP(w, r)
	})
}
