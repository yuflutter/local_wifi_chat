package features.text_chat.view

import AppConfig
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import core.di
import features.text_chat.model.MessageListModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.w3c.dom.HTMLElement
import view.ErrorWidget
import view.showErrorSnackBar

@Composable
fun MessageListWidget(
    model: MessageListModel
) {
    val messageList = model.state
    val scope = rememberCoroutineScope()
    var isLoading by remember { mutableStateOf(false) }
    var scrollContainerRef by remember { mutableStateOf<HTMLElement?>(null) }
    var topSentinelRef by remember { mutableStateOf<HTMLElement?>(null) }
    var showScrollDownButton by remember { mutableStateOf(false) }
    var isAtBottom by remember { mutableStateOf(true) }
    var previousMessageCount by remember { mutableStateOf(0) }

    LaunchedEffect(Unit) {
        model.fetchFirst()
        launch {
            while (true) {
                delay(di<AppConfig>().fetchRefreshPeriodMs)
                model.fetchRefresh()
            }
        }
    }

    LaunchedEffect(messageList.error) {
        if (messageList.error != null) showErrorSnackBar(messageList.error)
    }

    // Прокрутка вниз после первой загрузки или если пользователь внизу
    LaunchedEffect(messageList.all.size) {
        scrollContainerRef?.let { container ->
            if (messageList.all.isNotEmpty()) {
                // Если это первая загрузка или пользователь был внизу - прокручиваем
                if (previousMessageCount == 0 || isAtBottom) {
                    container.scrollTop = container.scrollHeight.toDouble()
                    showScrollDownButton = false
                } else if (messageList.all.size > previousMessageCount) {
                    // Появились новые сообщения, но пользователь не внизу
                    showScrollDownButton = true
                }
                previousMessageCount = messageList.all.size
            }
        }
    }

    // Intersection Observer для автоматической загрузки при видимости верхнего элемента
    DisposableEffect(topSentinelRef, messageList.hasMore, isLoading) {
        val sentinel = topSentinelRef ?: return@DisposableEffect onDispose { }

        val observer = js(
            """
            new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        sentinel.dispatchEvent(new CustomEvent('sentinelVisible'));
                    }
                });
            }, { threshold: 0.1 })
        """
        )

        val handleVisible: (dynamic) -> Unit = {
            if (messageList.hasMore && !isLoading) {
                console.log("Top sentinel visible, loading next batch...")
                isLoading = true
                val container = scrollContainerRef
                val previousScrollHeight = container?.scrollHeight ?: 0

                scope.launch {
                    model.fetchNext()
                    // Сохраняем позицию скролла после загрузки
                    container?.let {
                        it.scrollTop = (it.scrollHeight - previousScrollHeight).toDouble()
                    }
                    isLoading = false
                }
            }
        }

        sentinel.addEventListener("sentinelVisible", handleVisible)
        observer.observe(sentinel)

        onDispose {
            sentinel.removeEventListener("sentinelVisible", handleVisible)
            observer.disconnect()
        }
    }

    // Обработчик скролла для отслеживания позиции пользователя
    DisposableEffect(scrollContainerRef) {
        val container = scrollContainerRef ?: return@DisposableEffect onDispose { }

        val handleScroll: (dynamic) -> Unit = {
            val scrollTop = container.scrollTop
            val scrollHeight = container.scrollHeight
            val clientHeight = container.clientHeight

            // Проверяем, находится ли пользователь внизу (с небольшим порогом)
            val distanceFromBottom = scrollHeight - scrollTop - clientHeight
            isAtBottom = distanceFromBottom < 50

            // Скрываем кнопку если пользователь внизу
            if (isAtBottom) {
                showScrollDownButton = false
            }
        }

        container.addEventListener("scroll", handleScroll)

        onDispose {
            container.removeEventListener("scroll", handleScroll)
        }
    }

    Div({
        style {
            property("position", "relative")
            flex(1)
            overflowY("auto")
            padding(16.px)
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            property("gap", "12px")
        }
        ref { element ->
            scrollContainerRef = element
            onDispose { }
        }
    }) {
        if (model.state.all.isEmpty()) {
            Div({
                style {
                    textAlign("center")
                    color(Color("#999"))
                    marginTop(32.px)
                }
            }) {
                Text("No messages")
            }
//        } else if (messageList.error != null) {
//            ErrorWidget(errorInfo = messageList.error)
        } else {
            // Sentinel элемент для отслеживания видимости верха списка
            Div({
                style {
                    property("height", "1px")
                    property("width", "100%")
                }
                ref { element ->
                    topSentinelRef = element
                    onDispose { }
                }
            })

            messageList.all.reversed().forEach { message ->
                MessageListTile(message)
            }
        }

        // Плавающая кнопка прокрутки вниз с position: sticky
        if (showScrollDownButton) {
            Div({
                style {
                    property("position", "sticky")
                    property("bottom", "16px")
                    property("left", "calc(100% - 56px)")
                    property("width", "40px")
                    property("height", "40px")
                    property("margin-top", "auto")
                    property("border-radius", "50%")
                    property("background-color", "#007bff")
                    property("box-shadow", "0 2px 8px rgba(0,0,0,0.2)")
                    property("cursor", "pointer")
                    display(DisplayStyle.Flex)
                    property("align-items", "center")
                    property("justify-content", "center")
                    color(Color.white)
                    property("font-size", "20px")
                    property("transition", "all 0.2s")
                    property("z-index", "100")
                    property("pointer-events", "auto")
                }
                onClick {
                    scrollContainerRef?.let { container ->
                        container.scrollTop = container.scrollHeight.toDouble()
                        showScrollDownButton = false
                    }
                }
            }) {
                Text("⌄")
            }
        }
    }
}