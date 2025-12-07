package features.text_chat.view

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.css.*
import features.text_chat.model.Message
import core.toHumanTime

@Composable
fun MessageListTile(message: Message) {
    Div({
        style {
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            alignItems(if (message.isMine) AlignItems.FlexEnd else AlignItems.FlexStart)
            marginBottom(8.px)
        }
    }) {
        if (!message.isMine) {
            Div({
                style {
                    fontSize(12.px)
                    color(Color("#666"))
                    marginBottom(4.px)
                    marginLeft(8.px)
                }
            }) {
                Text(message.userName)
            }
        }
        Div({
            style {
                maxWidth(70.percent)
                property("padding", "12px 16px")
                property("border-radius", "16px")
                backgroundColor(if (message.isMine) Color("#DCF8C6") else Color.white)
                property("box-shadow", "0 1px 2px rgba(0,0,0,0.1)")
                property("word-wrap", "break-word")
            }
        }) {
            Div({
                style {
                    fontSize(15.px)
                    color(Color("#000"))
                    marginBottom(4.px)
                }
            }) {
                Text(message.text)
            }
            Div({
                style {
                    fontSize(11.px)
                    color(Color("#666"))
                    textAlign("right")
                }
            }) {
                Text(toHumanTime(message.createdAt))
            }
        }
    }
}
