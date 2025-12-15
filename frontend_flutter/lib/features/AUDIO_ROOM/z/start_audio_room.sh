#!/bin/bash

echo "=== Запуск аудио-комнаты ==="
echo ""

# Проверка наличия Go
if ! command -v go &> /dev/null; then
    echo "❌ Go не установлен. Установите Go 1.21+ для запуска бекенда."
    exit 1
fi

# Проверка наличия Flutter
if ! command -v flutter &> /dev/null; then
    echo "❌ Flutter не установлен."
    exit 1
fi

echo "✅ Go и Flutter найдены"
echo ""

# Установка зависимостей Flutter
echo "📦 Установка зависимостей Flutter..."
flutter pub get

# Запуск бекенда в фоне
echo "🚀 Запуск WebSocket сервера..."
cd backend_mock
go mod download
go run main.go &
BACKEND_PID=$!
cd ..

echo "✅ Сервер запущен (PID: $BACKEND_PID)"
echo "📡 WebSocket доступен на ws://localhost:8080/audio"
echo ""

# Ждем запуска сервера
sleep 2

# Запуск Flutter приложения
echo "🚀 Запуск Flutter приложения..."
flutter run -d chrome --web-browser-flag "--disable-web-security"

# Остановка бекенда при завершении
echo ""
echo "🛑 Остановка сервера..."
kill $BACKEND_PID

echo "✅ Готово!"
