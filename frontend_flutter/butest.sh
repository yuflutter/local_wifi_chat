flutter build web \
  --debug \
  --dart-define=FLAVOR=DEВUG \
  --no-web-resources-cdn

cd build/web  
python3 -m http.server 8080 
