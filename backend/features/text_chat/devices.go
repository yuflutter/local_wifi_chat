package text_chat

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"strings"
)

// HandleDevices возвращает список подключенных устройств
func HandleDevices(w http.ResponseWriter, r *http.Request) {
	devices, err := GetConnectedDevices()
	if err != nil {
		http.Error(w, fmt.Sprintf("Ошибка получения устройств: %v", err), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	// Если запрос с параметром ?format=html, возвращаем HTML
	if r.URL.Query().Get("format") == "html" {
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		data := struct {
			Devices []DeviceInfo
		}{
			Devices: devices,
		}
		GetHTMLDevicesTemplate().Execute(w, data)
		return
	}

	json.NewEncoder(w).Encode(devices)
}

// GetConnectedDevices получает список подключенных устройств
func GetConnectedDevices() ([]DeviceInfo, error) {
	var devices []DeviceInfo

	// Пробуем получить устройства через ARP таблицу
	devicesMap := make(map[string]*DeviceInfo)

	// Метод 1: Читаем /proc/net/arp (Linux)
	data, err := os.ReadFile("/proc/net/arp")
	if err == nil {
		lines := strings.Split(string(data), "\n")
		for _, line := range lines[1:] { // Пропускаем заголовок
			fields := strings.Fields(line)
			if len(fields) >= 4 {
				ip := fields[0]
				mac := fields[3]
				if mac != "00:00:00:00:00:00" && mac != "<incomplete>" {
					devicesMap[mac] = &DeviceInfo{
						IP:  ip,
						MAC: mac,
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
			if strings.Contains(line, " at ") {
				parts := strings.Fields(line)
				if len(parts) >= 4 {
					ip := strings.Trim(parts[1], "()")
					mac := parts[3]
					if mac != "00:00:00:00:00:00" {
						if dev, exists := devicesMap[mac]; exists {
							dev.IP = ip
							// Пытаемся извлечь hostname
							if len(parts) > 0 {
								dev.HostName = parts[0]
							}
						} else {
							devicesMap[mac] = &DeviceInfo{
								IP:       ip,
								MAC:      mac,
								HostName: parts[0],
							}
						}
					}
				}
			}
		}
	}

	// Преобразуем map в slice
	for _, device := range devicesMap {
		// Фильтруем только локальные IP (192.168.x.x, 10.x.x.x, 172.16-31.x.x)
		if IsLocalIP(device.IP) {
			if device.HostName == "" {
				device.HostName = "-"
			}
			devices = append(devices, *device)
		}
	}

	return devices, nil
}

// IsLocalIP проверяет, является ли IP локальным
func IsLocalIP(ipStr string) bool {
	return strings.HasPrefix(ipStr, "192.168.") ||
		strings.HasPrefix(ipStr, "10.") ||
		strings.HasPrefix(ipStr, "172.16.") ||
		strings.HasPrefix(ipStr, "172.17.") ||
		strings.HasPrefix(ipStr, "172.18.") ||
		strings.HasPrefix(ipStr, "172.19.") ||
		strings.HasPrefix(ipStr, "172.20.") ||
		strings.HasPrefix(ipStr, "172.21.") ||
		strings.HasPrefix(ipStr, "172.22.") ||
		strings.HasPrefix(ipStr, "172.23.") ||
		strings.HasPrefix(ipStr, "172.24.") ||
		strings.HasPrefix(ipStr, "172.25.") ||
		strings.HasPrefix(ipStr, "172.26.") ||
		strings.HasPrefix(ipStr, "172.27.") ||
		strings.HasPrefix(ipStr, "172.28.") ||
		strings.HasPrefix(ipStr, "172.29.") ||
		strings.HasPrefix(ipStr, "172.30.") ||
		strings.HasPrefix(ipStr, "172.31.")
}
