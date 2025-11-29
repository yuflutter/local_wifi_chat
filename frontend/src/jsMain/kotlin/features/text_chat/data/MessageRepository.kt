package features.text_chat.data

import AppConfig
import core.HumanErrorInfo
import core.di
import data.ApiClient
import data.urlOf
import features.text_chat.model.AbstractMessageRepository
import features.text_chat.model.Message
import features.text_chat.model.MessageList
import features.text_chat.model.NewMessage

class MessageRepository : AbstractMessageRepository {
    private val api = ApiClient()

    override suspend fun fetchMessages(
        olderThan: Message?,
        newerThan: Message?,
        limit: Int
    ): MessageList {
        try {
            require(!(olderThan != null && newerThan != null)) {
                "Нельзя одновременно использовать olderThan и newerThan в условиях фильтра"
            }

            val url = urlOf(di<AppConfig>().textChatUrl)
            olderThan?.let { url.parameters.append("olderThan", olderThan.createdAt.toString()) }
            newerThan?.let { url.parameters.append("newerThan", newerThan.createdAt.toString()) }
            url.parameters.append("limit", limit.toString())

            val batch = api.get<List<Message>>(url.build(), noLog = (newerThan != null))
            return MessageList(
                all = batch,
                isOlderAvailable = (batch.size == limit),
            )

        } catch (e: HumanErrorInfo) {
            return MessageList.empty(error = e)
        }
    }

    override suspend fun addNewMessage(newMessage: NewMessage) {
        api.post<NewMessage, Unit>(urlOf(di<AppConfig>().textChatUrl).build(), newMessage)
    }
}