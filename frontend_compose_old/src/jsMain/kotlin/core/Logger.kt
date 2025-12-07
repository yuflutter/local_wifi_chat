package core

import kotlinx.datetime.Clock
import kotlinx.datetime.Instant

enum class LogType { INFO, API, ERROR }

open class LogEntry(
    val type: LogType,
    val title: String?,
    val text: String,
    val details: Any?,
    val time: Instant = Clock.System.now(),
) {
    override fun toString(): String {
        val buf = StringBuilder()
        if (title != null) {
            buf.append(title, "\t\t", toHumanTime(time), "\n")
        }
        buf.append(text)
        if (details != null) buf.append("\n", details)
        return buf.toString()
    }
}

class ErrorLogEntry(
    title: String?,
    text: String,
    details: Any? = null,
    time: Instant = Clock.System.now()
) : LogEntry(LogType.ERROR, title, text, details, time)


data class HumanErrorInfo(
    val title: String,
    val text: String,
    val origin: ErrorLogEntry,
) : Throwable()

abstract class Logger : Initializable {
    private var apiRequestCounter = 0

    /**
     * Инфо-сообщение в лог.
     */
    fun info(title: String?, text: String, details: Any? = null) = log(
        LogEntry(
            type = LogType.INFO, title = title, text = text, details = details
        )
    )

    /**
     * Логирует запрос к API.
     * Возвращает номер API-запроса, который нужно передать в лог API-ответа,
     * что позволит для каждого запроса найти в логе соответствующий ответ.
     */
    fun apiReq(protocol: String, url: String, reqData: Any? = null): Int {
        log(
            LogEntry(
                type = LogType.API,
                title = "API-${++apiRequestCounter} >>>",
                text = "$protocol: $url",
                details = reqData
            )
        )
        return apiRequestCounter
    }

    /**
     * Логирует ответ API на ранее отправленный запрос.
     * Принимает номер запроса, полученного от apiReq().
     */
    fun apiRes(reqNum: Int, resStatus: Any, resData: Any? = null) = log(
        LogEntry(
            type = LogType.API,
            title = "API-$reqNum <<<",
            text = resStatus.toString(),
            details = resData
        )
    )

    /**
     * Логирует ошибку, возвращает объект для проброса наверх и показа пользователю.
     */
    fun error(error: Throwable, title: String? = null, text: String? = null): HumanErrorInfo {
        val newTitle = title ?: text ?: error.message ?: error.cause?.message ?: error.toString()

        val buf = StringBuilder()
        buf.append(error.stackTraceToString())
        if (error.cause != null) buf.append("\n", error.cause!!.stackTraceToString())
        val newText = buf.toString()

        val logEntry = ErrorLogEntry(newTitle, newText, error)
        log(logEntry)
        return HumanErrorInfo(newTitle, newText, logEntry)
    }

    protected abstract fun log(entry: LogEntry)
}

class InMemoryLogger(private val storeUpToEntries: Int = 100) : Logger() {
    private val entries = mutableListOf<LogEntry>()

    override fun log(entry: LogEntry) {
        if (entry.type == LogType.ERROR) {
            console.error(entry.details)
        } else {
            console.log(entry.toString())
        }
        entries.add(0, entry)
        if (entries.size > storeUpToEntries) entries.removeLast()
    }

    /**
     * Получаем все записи для отправки в саппорт.
     */
    fun getAll(): List<String> = entries.map { it.toString() }.toList()

    override suspend fun init() {}
}

/**
 * Краткий синоним для di<Logger>()
 */
val log: Logger get() = DI.get<Logger>()
