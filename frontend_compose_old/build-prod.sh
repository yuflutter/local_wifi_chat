#!/bin/bash
# Production build script
echo "Building for production..."
./gradlew clean jsBrowserProductionWebpack
echo "Production build complete!"
echo "Output: build/dist/js/productionExecutable/"
