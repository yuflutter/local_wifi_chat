package features.text_chat.model

import androidx.compose.runtime.compositionLocalOf

class ChatModel {
    val messageListModel = MessageListModel()
    val newMessageModel = NewMessageModel(messageListModel)
}

// Реально CompositionLocal пока не используется, хватает drilling props
val LocalChatModel = compositionLocalOf<ChatModel> {
    error("ChatModel not provided")
}
