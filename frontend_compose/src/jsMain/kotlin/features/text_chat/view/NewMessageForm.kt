package features.text_chat.view

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import core.HumanErrorInfo
import core.log
import features.text_chat.model.NewMessageModel
import view.showErrorSnackBar
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.attributes.placeholder
import org.jetbrains.compose.web.attributes.rows
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.FlexDirection
import org.jetbrains.compose.web.css.backgroundColor
import org.jetbrains.compose.web.css.color
import org.jetbrains.compose.web.css.display
import org.jetbrains.compose.web.css.flexDirection
import org.jetbrains.compose.web.css.fontSize
import org.jetbrains.compose.web.css.padding
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.width
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Input
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.TextArea
import org.w3c.dom.HTMLTextAreaElement

@Composable
fun NewMessageForm(
    model: NewMessageModel
) {
    val newMessage = model.state
    val scope = rememberCoroutineScope()
    var textAreaElement by remember { mutableStateOf<HTMLTextAreaElement?>(null) }

    val validateAndSend = {
        scope.launch {
            val errors = newMessage.validate()
            if (errors != null) {
//                showErrorSnackBar(HumanErrorInfo("Ошибка валидации", errors))
            } else {
                try {
                    model.add()
                    // Сброс высоты textarea после успешной отправки
                    textAreaElement?.style?.height = "44px"
                } catch (e: Throwable) {
                    val errorInfo = log.error(e)
                    showErrorSnackBar(errorInfo)
                }
            }
        }
    }

    Div({
        style {
            backgroundColor(Color.white)
            property("border-top", "1px solid #e0e0e0")
            padding(12.px)
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            property("gap", "8px")
            property("flex-shrink", "0")
        }
    }) {
        Input(InputType.Text) {
            value(newMessage.userName)
            placeholder("Your name")
            onInput { event ->
                model.setUserName(event.target.value)
//                UserSession.userName = event.target.value
            }
            style {
                padding(12.px)
                property("border", "1px solid #ddd")
                property("border-radius", "8px")
                fontSize(14.px)
                width(100.percent)
                property("box-sizing", "border-box")
            }
        }

        Div({
            style {
                display(DisplayStyle.Flex)
                property("gap", "8px")
            }
        }) {
            TextArea {
                value(newMessage.text)
                placeholder("Enter message text...")
                rows(1)
                ref { element ->
                    textAreaElement = element
                    onDispose { }
                }
                onInput { event ->
                    val target = event.target
                    model.setText(target.value)

                    // Автоматическое изменение высоты
                    target.style.height = "auto"
                    val scrollHeight = target.scrollHeight
                    val lineHeight = 20 // примерная высота строки
                    val maxHeight = lineHeight * 5 + 24 // 5 строк + padding
                    target.style.height = "${minOf(scrollHeight, maxHeight)}px"
                }
                onKeyDown { event ->
                    if (event.key == "Enter" && !event.shiftKey) {
                        event.preventDefault()
                        validateAndSend()
                    }
                }
                style {
                    property("flex", "1")
                    padding(12.px)
                    property("border", "1px solid #ddd")
                    property("border-radius", "8px")
                    fontSize(14.px)
                    property("resize", "none")
                    property("overflow-y", "auto")
                    property("min-height", "44px")
                    property("max-height", "124px")
                    property("line-height", "20px")
                    property("font-family", "inherit")
                }
            }

            Button({
                onClick { validateAndSend() }
//                if (newMessage.state.validationError != null) disabled()
                style {
                    property("padding", "12px 24px")
                    backgroundColor(
                        if (newMessage.validationError == null)
                            Color("#2196F3")
                        else
                            Color("#ccc")
                    )
                    color(Color.white)
                    property("border", "0")
                    property("border-radius", "8px")
                    fontSize(14.px)
                    property("font-weight", "600")
//                    property("cursor", if (newMessage.state.validationError == null) "pointer" else "not-allowed")
                }
            }) {
                Text("➤")
            }
        }
    }
}
