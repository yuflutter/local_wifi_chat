import core.DI
import core.InMemoryLogger
import core.Initializable
import features.text_chat.data.MessageRepository

private val flavor = Flavors.Debug  //TODO: ИЗМЕНИТЬ ДЛЯ РЕЛИЗНОЙ СБОРКИ!, перенести в Gradle!

private enum class Flavors { Debug, Prod }

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
