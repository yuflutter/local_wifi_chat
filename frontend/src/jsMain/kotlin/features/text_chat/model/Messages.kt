package features.text_chat.model

import kotlinx.datetime.Instant
import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import AppConfig
import UserSession
import core.HumanErrorInfo
import core.di

/** Приходит с бекенда */
@Serializable
data class Message(
    val userHash: String,
    val userName: String,
    val text: String,
    val createdAt: Instant,
    val lastModifiedAt: Instant? = null,
    @Transient val isMine: Boolean = (userHash == di<UserSession>().userHash),
)

/** Приходит с бекенда */
data class MessageList(
    val all: List<Message>,
    val hasMore: Boolean,
    val error: HumanErrorInfo? = null,
) {
    companion object {
        fun empty() = MessageList(all = emptyList(), hasMore = false)
    }
}

/** Создаётся пользователем */
@Serializable
data class NewMessage(
    val userName: String = di<UserSession>().userName,
    val text: String = "",
    @Transient val validationError: String? = "${this::class.simpleName} is not validated!"
) {
    fun validate(): String? {
        var errs = ""
        if (userName.isBlank()) errs += "\nEnter your name"
        if (text.isBlank()) errs += "\nEnter message text"
        return if (errs.isBlank()) null else errs.substring(1)
    }
}

/**  Интерфейс в domain, реализация в data */
interface AbstractMessageRepository {
    suspend fun fetchMessages(
        olderThan: Message? = null,
        newerThan: Message? = null,
        limit: Int = di<AppConfig>().fetchBatchSize
    ): MessageList

    suspend fun addNewMessage(newMessage: NewMessage)
}
