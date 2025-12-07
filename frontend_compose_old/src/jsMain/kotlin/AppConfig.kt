import core.DI
import core.InMemoryLogger
import core.Initializable
import features.text_chat.data.MessageRepository

// flavor и Flavors генерируются в build.gradle.kts
// internal enum class Flavors { Debug, Prod }
// internal val flavor = Flavors.$flavor

/**
 * Инжекция и асинхронная инициализация глобальных зависимостей.
 * Запускается на стартовой странице, ошибки выводятся туда же.
 */
suspend fun initApp() {
    DI.putAndInit(InMemoryLogger(storeUpToEntries = 100))
    DI.putAndInit(if (flavor == Flavors.Debug) DebugAppConfig() else ProdAppConfig())
    DI.putAndInit(UserSession())
    DI.put(MessageRepository())
}

abstract class AppConfig : Initializable {
    abstract val apiUrl: String
    val textChatUrl = "messages"
    
    // Информация о приложении
    val appName = "Local WiFi Chat"
    val flavorName: String
        get() = when (flavor) {
            Flavors.Debug -> "Debug"
            Flavors.Prod -> "Production"
        }

    // Опции для загрузки списков
    open val fetchBatchSize = 10
    open val fetchRefreshPeriodMs = 3000L

    // Ключи в LocalStorage
    val userHashStorageKey = "userHash"
    val userNameStorageKey = "userName"

    // Заголовки HTTP
    val userHashHeaderKey = "X-User-Hash"

    // Если нужна асинхронная инициализация конфига
    override suspend fun init() {}
}

class DebugAppConfig : AppConfig() {
    override val apiUrl = "http://localhost:9090/api"
    override val fetchBatchSize = 5

    override suspend fun init() {
        kotlinx.coroutines.delay(1000)
//        throw Exception("Testing AppConfig initialization error")
    }
}

class ProdAppConfig : AppConfig() {
    // В проде используем относительный урл, так как бандл фронтенда включен в бинарник бекенда
    override val apiUrl = "/api"
}
