#!/bin/bash

echo "🔍 Проверка PWA конфигурации..."
echo ""

RESOURCES_DIR="src/jsMain/resources"

# Проверка файлов
echo "📁 Проверка файлов:"
files=("index.html" "manifest.json" "icon-192.png" "icon-512.png" "favicon.ico")
for file in "${files[@]}"; do
    if [ -f "$RESOURCES_DIR/$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ✗ $file - ОТСУТСТВУЕТ!"
    fi
done

echo ""
echo "📋 Проверка manifest.json:"
if [ -f "$RESOURCES_DIR/manifest.json" ]; then
    if grep -q '"display": "standalone"' "$RESOURCES_DIR/manifest.json"; then
        echo "  ✓ Режим standalone"
    fi
    if grep -q '"theme_color"' "$RESOURCES_DIR/manifest.json"; then
        echo "  ✓ Theme color настроен"
    fi
    if grep -q '"icons"' "$RESOURCES_DIR/manifest.json"; then
        echo "  ✓ Иконки указаны"
    fi
fi

echo ""
echo "🌐 Проверка index.html:"
if [ -f "$RESOURCES_DIR/index.html" ]; then
    if grep -q 'viewport-fit=cover' "$RESOURCES_DIR/index.html"; then
        echo "  ✓ viewport-fit=cover (поддержка вырезов)"
    fi
    if grep -q 'theme-color' "$RESOURCES_DIR/index.html"; then
        echo "  ✓ theme-color мета-тег"
    fi
    if grep -q 'apple-mobile-web-app' "$RESOURCES_DIR/index.html"; then
        echo "  ✓ Apple мета-теги"
    fi
    if grep -q 'manifest.json' "$RESOURCES_DIR/index.html"; then
        echo "  ✓ Ссылка на manifest"
    fi
    if grep -q 'safe-area-inset' "$RESOURCES_DIR/index.html"; then
        echo "  ✓ Safe area insets"
    fi
fi

echo ""
echo "📱 Размеры иконок:"
if command -v identify &> /dev/null; then
    identify "$RESOURCES_DIR/icon-192.png" 2>/dev/null | awk '{print "  • 192: " $3}'
    identify "$RESOURCES_DIR/icon-512.png" 2>/dev/null | awk '{print "  • 512: " $3}'
else
    ls -lh "$RESOURCES_DIR"/icon-*.png | awk '{print "  • " $9 ": " $5}'
fi

echo ""
echo "✅ Проверка завершена!"
echo ""
echo "💡 Для тестирования:"
echo "   1. Запустите приложение"
echo "   2. Откройте Chrome DevTools → Application → Manifest"
echo "   3. Или используйте Lighthouse для аудита PWA"
