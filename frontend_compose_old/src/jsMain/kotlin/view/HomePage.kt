package view

import ChatPage
import EmptyPage
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*

enum class Page(val title: String) {
    Chat("Chat"),
    Audio("Audio"),
    Devices("Devices"),
    Settings("Info")
}

@Composable
fun HomePage() {
    var currentPage by remember { mutableStateOf(Page.Chat) }

    Div({
        style {
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            property("height", "100dvh")
            property("min-height", "100vh")
            property("min-height", "-webkit-fill-available")
            width(100.vw)
            margin(0.px)
            padding(0.px)
            fontFamily("system-ui", "-apple-system", "sans-serif")
            backgroundColor(Color("#f5f5f5"))
            position(Position.Relative)
            property("box-sizing", "border-box")
        }
    }) {
        // Content area with reserved space for bottom navigation
        Div({
            style {
                property("flex", "1")
                property("overflow", "hidden")
                property("box-sizing", "border-box")
            }
        }) {
            when (currentPage) {
                Page.Chat -> ChatPage()
                Page.Audio -> EmptyPage("Audio-room")
                Page.Devices -> EmptyPage("Devices")
                Page.Settings -> InfoPage()
            }
        }

        AppBottomNavigation(
            currentPage = currentPage,
            onPageSelected = { currentPage = it }
        )

        SnackBarHost()
    }
}

@Composable
private fun AppBottomNavigation(
    currentPage: Page,
    onPageSelected: (Page) -> Unit
) {
    Div({
        style {
            display(DisplayStyle.Flex)
            justifyContent(JustifyContent.SpaceAround)
            alignItems(AlignItems.Center)
            backgroundColor(Color.white)
            property("border-top", "1px solid #e0e0e0")
            padding(12.px)
            property("padding-bottom", "calc(12px + env(safe-area-inset-bottom))")
            property("box-shadow", "0 -2px 10px rgba(0,0,0,0.1)")
            property("flex-shrink", "0")
        }
    }) {
        Page.entries.forEach { screen ->
            NavButton(
                title = screen.title,
                isSelected = currentPage == screen,
                onClick = { onPageSelected(screen) }
            )
        }
    }
}

@Composable
private fun NavButton(
    title: String,
    isSelected: Boolean,
    onClick: () -> Unit
) {
    Button({
        onClick { onClick() }
        style {
            property("flex", "1")
            property("padding", "12px 8px")
            property("border", "0")
            backgroundColor(if (isSelected) Color("#2196F3") else Color.transparent)
            color(if (isSelected) Color.white else Color("#666"))
            fontSize(14.px)
            property("font-weight", if (isSelected) "600" else "normal")
            property("border-radius", "8px")
            property("cursor", "pointer")
            property("transition", "all 0.2s")
        }
    }) {
        Text(title)
    }
}
