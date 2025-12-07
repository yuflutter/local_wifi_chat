# Текстовый чат на Compose Web (WASM)

Приложение текстового чата для мобильных браузеров с Material Design.

## Возможности

- ✅ Нижняя панель навигации
- ✅ Список сообщений с подгрузкой при прокрутке
- ✅ Форма ввода с полями "Автор" и "Текст"
- ✅ Сохранение имени автора в localStorage
- ✅ Валидация формы с подсказками в стиле Material Design
- ✅ Кебаб-меню для каждого сообщения с действиями:
  - Ответить (всегда доступно)
  - Ответить с цитатой (с выделенным текстом)
  - Редактировать (только свои сообщения)
- ✅ Цитирование сообщений с возможностью удаления цитаты
- ✅ Редактирование отправленных сообщений
- ✅ Темная и светлая тема с переключателем в настройках
- ✅ Сохранение выбранной темы в localStorage (по умолчанию темная)
- ✅ Material Design 3
- ✅ Заглушка бекенда (MockBackend)

## Структура проекта

```
composeApp/src/webMain/kotlin/org/example/project/
├── App.kt              # Главный компонент с навигацией
├── ChatScreen.kt       # Экран чата со списком и формой
├── ChatViewModel.kt    # ViewModel для управления состоянием
├── Message.kt          # Модель данных сообщения
├── MockBackend.kt      # Заглушка бекенда
├── LocalStorage.kt     # Работа с localStorage браузера
└── main.kt            # Точка входа
```

## Запуск

```bash
./gradlew wasmJsBrowserDevelopmentRun --continuous
```

Приложение будет доступно по адресу: http://localhost:8080

## Разработка

Для замены MockBackend на реальный API:
1. Создайте HTTP клиент (например, Ktor Client)
2. Замените методы в `MockBackend.kt` на реальные запросы
3. Добавьте обработку ошибок и состояния загрузки

---

Learn more about [Kotlin Multiplatform](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html),
[Compose Multiplatform](https://github.com/JetBrains/compose-multiplatform/#compose-multiplatform),
[Kotlin/Wasm](https://kotl.in/wasm/)
