#!/bin/bash

echo "=== Тестирование исправления аудио-трансляции ==="
echo ""

echo "1. Запуск бекенда..."
cd backend_mock
go run main.go &
BACKEND_PID=$!

echo "Бекенд запущен с PID: $BACKEND_PID"
echo ""

echo "2. Ожидание запуска бекенда..."
sleep 3

echo "3. Теперь запустите Flutter приложение в другом терминале:"
echo "   flutter run"
echo ""

echo "4. Подключите несколько участников и проверьте логи:"
echo "   - Бекенд должен показывать 'Broadcasting audio from [ID] to [N] participants'"
echo "   - Фронтенд должен показывать 'Processing audio chunk: [N] bytes'"
echo "   - Фронтенд должен показывать 'Audio chunk from participant: [ID]'"
echo ""

echo "Нажмите Enter для остановки бекенда..."
read

echo "Остановка бекенда..."
kill $BACKEND_PID
echo "Готово!"