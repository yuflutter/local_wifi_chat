#!/bin/bash

# Скрипт для генерации PNG иконок из SVG
# Требует установленный ImageMagick или Inkscape

echo "🎨 Генерация иконок PWA..."

SVG_FILE="src/jsMain/resources/icon.svg"
OUTPUT_DIR="src/jsMain/resources"

# Проверяем наличие ImageMagick
if command -v convert &> /dev/null; then
    echo "✓ Используем ImageMagick"
    convert -background none -resize 192x192 "$SVG_FILE" "$OUTPUT_DIR/icon-192.png"
    convert -background none -resize 512x512 "$SVG_FILE" "$OUTPUT_DIR/icon-512.png"
    echo "✓ Иконки созданы: icon-192.png, icon-512.png"
    
# Проверяем наличие Inkscape
elif command -v inkscape &> /dev/null; then
    echo "✓ Используем Inkscape"
    inkscape "$SVG_FILE" --export-filename="$OUTPUT_DIR/icon-192.png" --export-width=192 --export-height=192
    inkscape "$SVG_FILE" --export-filename="$OUTPUT_DIR/icon-512.png" --export-width=512 --export-height=512
    echo "✓ Иконки созданы: icon-192.png, icon-512.png"
    
# Проверяем наличие rsvg-convert
elif command -v rsvg-convert &> /dev/null; then
    echo "✓ Используем rsvg-convert"
    rsvg-convert -w 192 -h 192 "$SVG_FILE" -o "$OUTPUT_DIR/icon-192.png"
    rsvg-convert -w 512 -h 512 "$SVG_FILE" -o "$OUTPUT_DIR/icon-512.png"
    echo "✓ Иконки созданы: icon-192.png, icon-512.png"
    
else
    echo "❌ Не найдены инструменты для конвертации SVG"
    echo ""
    echo "Установите один из:"
    echo "  • ImageMagick: sudo apt install imagemagick (Linux) или brew install imagemagick (macOS)"
    echo "  • Inkscape: sudo apt install inkscape (Linux) или brew install inkscape (macOS)"
    echo "  • librsvg: sudo apt install librsvg2-bin (Linux) или brew install librsvg (macOS)"
    echo ""
    echo "Или откройте файл generate-icons.html в браузере и скачайте иконки вручную"
    exit 1
fi

echo "✅ Готово!"
