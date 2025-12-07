package features.text_chat.model

import UserSession
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import core.di

class NewMessageModel(
    val messageListModel: MessageListModel,
    val repository: AbstractMessageRepository = di<AbstractMessageRepository>(),
) {
    var state: NewMessage by mutableStateOf(NewMessage())

    fun setUserName(v: String) {
        state = state.copy(userName = v)
    }

    fun setText(v: String) {
        state = state.copy(text = v)
    }

    fun validate(): String? {
        val err = state.validate()
        state = state.copy(validationError = err)
        return err
    }

    suspend fun add() {
//        throw Exception("Testing adding new message error")
        repository.addNewMessage(state)
        di<UserSession>().userName = state.userName
        messageListModel.fetchNewer()
        state = NewMessage()
    }
}