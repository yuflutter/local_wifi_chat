import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text

@Composable
fun EmptyPage(title: String) {
    Div({
        style {
            height(100.percent)
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            flex(1)
        }
    }) {
        // Заголовок
        Div({
            style {
                padding(16.px)
                backgroundColor(Color("#2196F3"))
                color(Color.white)
                fontSize(20.px)
                fontWeight("600")
                textAlign("center")
            }
        }) {
            Text(title)
        }
        
        // Контент
        Div({
            style {
                flex(1)
                display(DisplayStyle.Flex)
                alignItems(AlignItems.Center)
                justifyContent(JustifyContent.Center)
                color(Color("#999"))
                fontSize(16.px)
            }
        }) {
            Text("Эта страница пока пуста")
        }
    }
}
