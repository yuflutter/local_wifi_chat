package view

import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*

@Composable
fun WaitingWidget() {
    Div({
        style {
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            height(100.vh)
            width(100.vw)
            property("align-items", "center")
            property("justify-content", "center")
            property("flex", "1")
            property("gap", "16px")
        }
    }) {
        Div({
            style {
                width(48.px)
                height(48.px)
                property("border", "4px solid #e0e0e0")
                property("border-top", "4px solid #2196F3")
                property("border-radius", "50%")
                property("animation", "spin 1s linear infinite")
            }
        })
        Div({
            style {
                fontSize(18.px)
                color(Color("#666"))
                property("font-weight", "500")
            }
        }) {
            Text("Загрузка...")
        }
    }
    Style {
        """
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        """.trimIndent()
    }
}
