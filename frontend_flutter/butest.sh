flutter build web \
  --debug \
  --dart-define=FLAVOR=DEFUG \
  --no-web-resources-cdn

cd build/web  
python3 -m http.server 8080 
