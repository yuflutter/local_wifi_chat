# 📱 PWA Setup для KMP Chat

## ✅ Что уже настроено

### 1. Мета-теги для мобильных браузеров
- ✓ `viewport` с поддержкой `viewport-fit=cover` для устройств с вырезами
- ✓ `theme-color` для цвета адресной строки
- ✓ Apple-специфичные мета-теги для iOS
- ✓ Динамическая высота viewport (`100dvh`)
- ✓ Safe area insets для устройств с вырезами (iPhone X+)

### 2. PWA Manifest
- ✓ `manifest.json` с настройками приложения
- ✓ Режим `standalone` для запуска как нативное приложение
- ✓ Иконки 192x192 и 512x512

### 3. Иконки
- ✓ `icon-192.png` - для Android и общего использования
- ✓ `icon-512.png` - для высококачественных экранов
- ✓ `favicon.ico` - для браузеров
- ✓ Apple touch icon для iOS

### 4. Мобильная оптимизация
- ✓ Фиксированная нижняя навигация
- ✓ Поддержка safe-area для home indicator
- ✓ Отключение tap highlight и touch callout
- ✓ Оптимизация touch-action

## 🎨 Регенерация иконок

Если нужно изменить дизайн иконок:

### Вариант 1: Автоматически (Linux/macOS)
```bash
./generate-icons.sh
```

### Вариант 2: Через браузер
1. Откройте `src/jsMain/resources/generate-icons.html` в браузере
2. Нажмите "Скачать все иконки"
3. Сохраните файлы в `src/jsMain/resources/`

### Вариант 3: Вручную
Отредактируйте `src/jsMain/resources/icon.svg` и запустите:
```bash
# ImageMagick
convert -background none -resize 192x192 src/jsMain/resources/icon.svg src/jsMain/resources/icon-192.png
convert -background none -resize 512x512 src/jsMain/resources/icon.svg src/jsMain/resources/icon-512.png

# Или Inkscape
inkscape src/jsMain/resources/icon.svg --export-filename=src/jsMain/resources/icon-192.png --export-width=192
inkscape src/jsMain/resources/icon.svg --export-filename=src/jsMain/resources/icon-512.png --export-width=512
```

## 📦 Установка PWA

### На Android:
1. Откройте сайт в Chrome
2. Нажмите меню (⋮) → "Установить приложение" или "Добавить на главный экран"

### На iOS:
1. Откройте сайт в Safari
2. Нажмите кнопку "Поделиться" (□↑)
3. Выберите "На экран «Домой»"

## 🔧 Дополнительные улучшения (опционально)

### Service Worker для офлайн-режима
Создайте `src/jsMain/resources/sw.js`:
```javascript
const CACHE_NAME = 'kmp-chat-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/local-wifi-chat-frontend.js',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

И зарегистрируйте в `index.html`:
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## 🎨 Дизайн иконки

Текущая иконка включает:
- 🟣 Фиолетовый фон (#7F52FF) - цвет Kotlin
- ⚪ Белая буква "K" - логотип Kotlin
- 💬 Голубой чат-пузырь (#00D9FF) - индикатор чат-приложения

## 📱 Тестирование

1. **Chrome DevTools**: Откройте DevTools → Application → Manifest
2. **Lighthouse**: Запустите аудит PWA
3. **Реальное устройство**: Протестируйте на физическом телефоне

## 🌐 Поддержка браузеров

- ✅ Chrome/Edge (Android, Desktop)
- ✅ Safari (iOS, macOS)
- ✅ Firefox (Android, Desktop)
- ✅ Samsung Internet
