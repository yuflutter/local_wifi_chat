import AppConfig
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import core.di
import features.text_chat.model.ChatModel
import features.text_chat.model.LocalChatModel
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.FlexDirection
import org.jetbrains.compose.web.css.backgroundColor
import org.jetbrains.compose.web.css.color
import org.jetbrains.compose.web.css.display
import org.jetbrains.compose.web.css.flexDirection
import org.jetbrains.compose.web.css.fontSize
import org.jetbrains.compose.web.css.fontWeight
import org.jetbrains.compose.web.css.overflow
import org.jetbrains.compose.web.css.padding
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.textAlign
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import features.text_chat.view.MessageListWidget
import features.text_chat.view.NewMessageForm

@Composable
fun ChatPage() {
    val chatModel = remember { ChatModel() }
    // Реально CompositionLocal пока не используется, хватает drilling props
    CompositionLocalProvider(LocalChatModel provides chatModel) {
        Div({
            style {
                display(DisplayStyle.Flex)
                flexDirection(FlexDirection.Column)
                property("height", "100%")
                overflow("hidden")
            }
        }) {
            // Header
            Div({
                style {
                    padding(16.px)
                    backgroundColor(Color("#2196F3"))
                    color(Color.white)
                    fontSize(20.px)
                    fontWeight("600")
                    textAlign("center")
                    property("flex-shrink", "0")
                }
            }) {
                Text(di<AppConfig>().appName)
            }

            // Scrollable message list
            MessageListWidget(chatModel.messageListModel)

            // Fixed form at bottom
            NewMessageForm(chatModel.newMessageModel)
        }
    }
}
