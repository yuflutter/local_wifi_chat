package view

import AppConfig
import BuildInfo
import androidx.compose.runtime.Composable
import core.DI
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text

// BuildInfo генерируется в build.gradle.kts

@Composable
fun InfoPage() {
    val config = DI.get<AppConfig>()
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
            Text("Info")
        }
        
        // Контент
        Div({
            style {
                flex(1)
                display(DisplayStyle.Flex)
                flexDirection(FlexDirection.Column)
                alignItems(AlignItems.Center)
                justifyContent(JustifyContent.Center)
                property("gap", "16px")
                padding(24.px)
            }
        }) {
            InfoItem("App", config.appName)
            InfoItem("Version", BuildInfo.VERSION)
            InfoItem("Build Time", BuildInfo.BUILD_TIME)
            InfoItem("Flavor", config.flavorName)
        }
    }
}

@Composable
private fun InfoItem(label: String, value: String) {
    Div({
        style {
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            alignItems(AlignItems.Center)
            property("gap", "4px")
        }
    }) {
        Div({
            style {
                color(Color("#666"))
                fontSize(14.px)
            }
        }) {
            Text(label)
        }
        Div({
            style {
                color(Color("#333"))
                fontSize(18.px)
                fontWeight("600")
            }
        }) {
            Text(value)
        }
    }
}
