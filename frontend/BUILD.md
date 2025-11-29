# Сборка проекта

## Development сборка

Для разработки используется Debug flavor с локальным API:

```bash
./gradlew jsBrowserDevelopmentWebpack
```

Или для запуска dev-сервера:

```bash
./gradlew jsBrowserDevelopmentRun
```

## Production сборка

Для production используется Prod flavor с относительным API URL:

```bash
./gradlew jsBrowserProductionWebpack
```

Или используйте готовый скрипт:

```bash
./build-prod.sh
```

Результат сборки находится в `build/dist/js/productionExecutable/`

## Flavors

Система автоматически определяет flavor в зависимости от типа сборки:

- **Debug**: `apiUrl = "http://localhost:9090/api"`
- **Production**: `apiUrl = "/api"` (относительный URL)

Flavor отображается на странице Info в приложении.

## Информация о сборке

При каждой сборке автоматически генерируются:
- Версия приложения (из `build.gradle.kts`)
- Дата и время сборки
- Flavor (Debug/Production)

Эта информация доступна на странице Info в приложении.
