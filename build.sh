cd frontend
./gradlew jsBrowserProductionWebpack
cd ..
rm backend/frontend_bundle/*
cp frontend/build/dist/js/productionExecutable/* backend/frontend_bundle/
cd backend
env GOOS=android GOARCH=arm64 go build
