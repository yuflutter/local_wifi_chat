cd frontend_flutter
./build-prod.sh
cd ..
rm -r backend_go/frontend_bundle/*
cp -r frontend_flutter/build/web/. backend_go/frontend_bundle/
cd backend_go
./build-prod.sh
