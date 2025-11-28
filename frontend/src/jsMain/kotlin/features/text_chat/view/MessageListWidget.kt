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
import view.showErrorSnackBar

@Composable
fun MessageListWidget(
    model: MessageListModel
) {
    val list = model.list
    val scope = rememberCoroutineScope()
    var isLoading by remember { mutableStateOf(false) }
    var scrollContainerRef by remember { mutableStateOf<HTMLElement?>(null) }
    var topSentinelRef by remember { mutableStateOf<HTMLElement?>(null) }
    var isAtBottom by remember { mutableStateOf(true) }

    LaunchedEffect(Unit) {
        model.fetchTop()
        launch {
            while (true) {
                delay(di<AppConfig>().fetchRefreshPeriodMs)
                model.fetchNewer()
            }
        }
    }

    LaunchedEffect(list.error) {
        if (list.error != null) showErrorSnackBar(list.error)
    }

    // Прокрутка вниз после первой загрузки или если пользователь уже внизу
    LaunchedEffect(list.all.size) {
        scrollContainerRef?.let { container ->
            if (list.all.isNotEmpty() && (model.isFirstFetch || isAtBottom)) {
                container.scrollTop = container.scrollHeight.toDouble()
            }
        }
    }

    // Intersection Observer для автоматической загрузки при видимости верхнего элемента
    DisposableEffect(topSentinelRef, list.isOlderOnesAvailable, isLoading) {
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
            if (list.isOlderOnesAvailable && !isLoading) {
                console.log("Top sentinel visible, loading next batch...")
                isLoading = true
                val container = scrollContainerRef
                val previousScrollHeight = container?.scrollHeight ?: 0

                scope.launch {
                    model.fetchOlder()
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
                model.isNewerOnesUnread = false
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
        ref { e ->
            scrollContainerRef = e
            onDispose { }
        }
    }) {
        if (model.list.all.isEmpty()) {
            Div({
                style {
                    textAlign("center")
                    color(Color("#999"))
                    marginTop(32.px)
                }
            }) {
                Text("No messages")
            }
        } else {
            // Sentinel элемент для отслеживания видимости верха списка
            Div({
                style {
                    property("height", "1px")
                    property("width", "100%")
                }
                ref { e ->
                    topSentinelRef = e
                    onDispose { }
                }
            })

            list.all.reversed().forEach { message ->
                MessageListTile(message)
            }
        }

        // Плавающая кнопка прокрутки вниз с position: sticky
        if (model.isNewerOnesUnread && !isAtBottom) {
            Div({
                style {
                    width(50.px)
                    height(50.px)
                    position(Position.Sticky)
                    property("bottom", "0px")
                    property("left", "calc(100% - 50px)")
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
                    }
                }
            }) {
                Text("⇓")
            }
        }
    }
}