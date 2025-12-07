cd frontend_flutter
./burelease.sh
cd ..
rm -r backend_go/frontend_bundle/*
cp -r frontend_flutter/build/web/. backend_go/frontend_bundle/
cd backend_go
./burelease.sh
