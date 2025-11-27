package view

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import kotlinx.browser.window
import org.w3c.dom.events.Event
import core.HumanErrorInfo

@Composable
fun ErrorWidget(errorInfo: HumanErrorInfo) {
    Div({
        style {
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            property("align-items", "center")
            property("justify-content", "center")
            property("flex", "1")
            padding(24.px)
        }
    }) {
        Div({
            style {
                backgroundColor(Color("#ffebee"))
                property("border-left", "4px solid #f44336")
                property("border-radius", "8px")
                padding(24.px)
                //property("max-width", "600px")
                property("box-shadow", "0 2px 8px rgba(0,0,0,0.1)")
            }
        }) {
            Div({
                style {
                    fontSize(20.px)
                    color(Color("#c62828"))
                    property("font-weight", "600")
                    property("margin-bottom", "12px")
                    display(DisplayStyle.Flex)
                    property("align-items", "center")
                    property("gap", "8px")
                }
            }) {
                Span({ style { fontSize(24.px) } }) {
                    Text("⚠️")
                }
                Text(errorInfo.title)
            }
            Div({
                style {
                    fontSize(14.px)
                    color(Color("#666"))
                    property("line-height", "1.6")
                    property("margin-top", "8px")
                    backgroundColor(Color("#fff"))
                    padding(12.px)
                    property("border-radius", "4px")
                    property("font-family", "monospace")
                    property("word-break", "break-word")
                }
            }) {
                Pre {
                    Text(errorInfo.text)
                }
            }
        }
    }
}

// Глобальное состояние для SnackBar
private val snackBarState = mutableStateOf<HumanErrorInfo?>(null)

/**
 * Показывает SnackBar с информацией об ошибке.
 * Аналог Flutter ScaffoldMessenger.of(context).showSnackBar()
 */
fun showErrorSnackBar(errorInfo: HumanErrorInfo) {
    snackBarState.value = errorInfo
}

/**
 * Компонент SnackBar, который должен быть добавлен в корень приложения.
 * Показывает всплывающее снизу сообщение с ошибкой.
 */
@Composable
fun SnackBarHost() {
    val errorInfo = snackBarState.value

    if (errorInfo != null) {
        var offsetY by remember { mutableStateOf(100) }
        var isDragging by remember { mutableStateOf(false) }
        var startY by remember { mutableStateOf(0) }

        LaunchedEffect(errorInfo) {
            offsetY = 0
        }

        // Barrier (затемненный фон)
        Div({
            style {
                property("position", "fixed")
                property("top", "0")
                property("left", "0")
                property("right", "0")
                property("bottom", "0")
                backgroundColor(Color("rgba(0, 0, 0, 0.5)"))
                property("z-index", "1000")
                property("animation", "fadeIn 0.3s ease-out")
            }
            onClick {
                snackBarState.value = null
            }
        })

        // SnackBar контейнер
        Div({
            style {
                property("position", "fixed")
                property("bottom", "${offsetY}px")
                property("left", "16px")
                property("right", "16px")
                property("z-index", "1001")
//                property("max-width", "600px")
                property("margin", "0 auto")
                property("transition", if (isDragging) "none" else "bottom 0.3s ease-out")
                property("touch-action", "none")
                property("user-select", "none")
            }

            // Mouse events для драга
            onMouseDown { event ->
                isDragging = true
                startY = event.clientY
                event.preventDefault()
            }
        }) {
            Div({
                style {
                    backgroundColor(Color("#f44336"))
                    property("border-radius", "12px")
                    padding(20.px)
                    property("box-shadow", "0 4px 20px rgba(0,0,0,0.3)")
                    color(Color.white)
                }
            }) {
                // Заголовок
                Div({
                    style {
                        fontSize(18.px)
                        property("font-weight", "600")
                        property("margin-bottom", "8px")
                        display(DisplayStyle.Flex)
                        property("align-items", "center")
                        property("gap", "8px")
                    }
                }) {
                    Span({ style { fontSize(20.px) } }) {
                        Text("⚠️")
                    }
                    Text(errorInfo.title)
                }

                // Текст ошибки
                Div({
                    style {
                        fontSize(14.px)
                        property("line-height", "1.5")
                        property("opacity", "0.95")
                        property("max-height", "200px")
                        property("overflow-y", "auto")
                        backgroundColor(Color("rgba(0, 0, 0, 0.2)"))
                        padding(12.px)
                        property("border-radius", "8px")
                        property("font-family", "monospace")
                        property("word-break", "break-word")
                    }
                }) {
                    Text(errorInfo.text)
                }
            }
        }

        // Глобальные mouse events для завершения драга
        DisposableEffect(isDragging) {
            if (isDragging) {
                val moveHandler: (Event) -> Unit = { event ->
                    val mouseEvent = event.unsafeCast<org.w3c.dom.events.MouseEvent>()
                    val delta = startY - mouseEvent.clientY
                    if (delta < 0) {
                        offsetY = -delta
                    }
                }

                val upHandler: (Event) -> Unit = {
                    isDragging = false
                    if (offsetY > 100) {
                        snackBarState.value = null
                    } else {
                        offsetY = 0
                    }
                }

                window.addEventListener("mousemove", moveHandler)
                window.addEventListener("mouseup", upHandler)

                onDispose {
                    window.removeEventListener("mousemove", moveHandler)
                    window.removeEventListener("mouseup", upHandler)
                }
            } else {
                onDispose { }
            }
        }

        // CSS анимации
        Style {
            """
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            """.trimIndent()
        }
    }
}