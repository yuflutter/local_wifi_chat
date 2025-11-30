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

/**
 * Список сообщений - реверсивный (новые внизу, старые вверху)
 * При прокрутке наверх - подгружаются старые
 * Новые подгружаются по таймеру, и добавляются вниз
 */
@Composable
fun MessageListWidget(
    model: MessageListModel
) {
    val list = model.list
    val coroutineScope = rememberCoroutineScope()
    var scrollArea by remember { mutableStateOf<HTMLElement?>(null) }
    var topSentinel by remember { mutableStateOf<HTMLElement?>(null) }
    var isAtBottom by remember { mutableStateOf(true) }
    var savedDistanceFromBottom by remember { mutableStateOf<Double?>(null) }

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
    // Или восстановление позиции после загрузки старых сообщений
    LaunchedEffect(list.all.size) {
        scrollArea?.let { area ->
            if (savedDistanceFromBottom != null) {
                // Восстанавливаем позицию после загрузки старых сообщений
                val scrollTop = area.scrollHeight - area.clientHeight - savedDistanceFromBottom!!
                if (scrollTop > 0) {
                    area.scrollTop = scrollTop
                }
                savedDistanceFromBottom = null
            } else if (list.all.isNotEmpty() && (model.forceScrollToTop || isAtBottom)) {
                // Прокрутка вниз для новых сообщений
                area.scrollTop = area.scrollHeight.toDouble()
            }
        }
    }

    // Intersection Observer для автоматической загрузки при видимости верхнего элемента
    DisposableEffect(topSentinel, list.isOlderAvailable) {
        val sentinel = topSentinel ?: return@DisposableEffect onDispose { }

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
            if (list.isOlderAvailable) {
                console.log("Top sentinel visible, loading next batch...")
                // Сохраняем позицию скролла до загрузки
                scrollArea?.let {
                    savedDistanceFromBottom = it.scrollHeight - it.scrollTop - it.clientHeight
                }
                coroutineScope.launch {
                    model.fetchOlder()
                    // Восстановление позиции произойдет в LaunchedEffect(list.all.size)
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
    DisposableEffect(scrollArea) {
        val area = scrollArea ?: return@DisposableEffect onDispose { }

        val handleScroll: (dynamic) -> Unit = {
            // Проверяем, находится ли пользователь внизу (с небольшим порогом)
            val distanceFromBottom = area.scrollHeight - area.scrollTop - area.clientHeight
            isAtBottom = (distanceFromBottom < 50)

            // Скрываем кнопку если пользователь внизу
            if (isAtBottom) model.isNewerUnread = false
        }

        area.addEventListener("scroll", handleScroll)
        onDispose { area.removeEventListener("scroll", handleScroll) }
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
            scrollArea = e
            onDispose { }
        }
    }) {
        if (list.all.isEmpty()) {
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
                    topSentinel = e
                    onDispose { }
                }
            })

            list.all.reversed().forEach { message ->
                MessageListTile(message)
            }
        }

        // Плавающая кнопка прокрутки вниз с position: sticky
        if (model.isNewerUnread && !isAtBottom) {
            Div({
                style {
                    width(50.px)
                    height(50.px)
                    property("min-width", "50px")
                    property("min-height", "50px")
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
                    property("font-size", "24px")
                    property("transition", "all 0.2s")
                    property("z-index", "100")
                    property("pointer-events", "auto")
                    property("flex-shrink", "0")
                }
                onClick {
                    scrollArea?.let { container ->
                        container.scrollTop = container.scrollHeight.toDouble()
                    }
                }
            }) {
                Text("⇓")
            }
        }
    }
}