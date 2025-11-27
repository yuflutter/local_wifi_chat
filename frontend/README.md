# Чат на Compose Multiplatform Web

Простое приложение чата для мобильного браузера, созданное с использованием Compose HTML и Kotlin/JS.

## Возможности

- 📱 Адаптивный дизайн для мобильных браузеров
- 💬 Отправка и получение сообщений
- 👤 Сохранение имени пользователя в localStorage
- 🎨 Стилизация сообщений как в Telegram (свои сообщения справа с зеленым фоном)
- 🧭 Нижняя навигационная панель с 4 разделами

## Запуск

```bash
./gradlew jsBrowserDevelopmentRun
```

Приложение откроется в браузере по адресу `http://localhost:8080`

**Примечание:** Первая сборка может занять 2-3 минуты. Дождитесь сообщения "webpack compiled successfully".

## Сборка для продакшена

```bash
./gradlew jsBrowserDistribution
```

Результат будет в `build/distributions/`

## Структура проекта

```
src/jsMain/kotlin/
├── Main.kt                          # Точка входа
├── components/
│   ├── AppContainer.kt              # Контейнер приложения
│   ├── BottomNavigation.kt          # Нижняя навигация
│   ├── MessageBubble.kt             # Компонент сообщения
│   └── MessageInput.kt              # Поле ввода
├── screens/
│   ├── ChatScreen.kt                # Экран чата
│   └── EmptyScreen.kt               # Пустые экраны
└── data/
    └── Message.kt                   # Модель сообщения
```

## Заглушки бекенда

В `ChatScreen.kt` находятся функции для интеграции с бекендом:
- `loadMessagesFromBackend()` - загрузка сообщений
- `sendMessageToBackend(message)` - отправка сообщения
- `getCurrentTimestamp()` - получение времени

## Технологии

- Kotlin 1.9.20
- Compose Multiplatform 1.5.10
- Kotlin/JS (IR)
- Gradle 8.5
