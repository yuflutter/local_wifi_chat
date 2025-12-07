package features.text_chat.model

import androidx.compose.runtime.*
import androidx.compose.runtime.setValue
import core.di
import core.log

private enum class FetchMode { TOP, OLDER, NEWER }

class MessageListModel(
    val repository: AbstractMessageRepository = di<AbstractMessageRepository>()
) {
    /**
     * Приходит с бекенда, отсортирован в обратном порядке - от новых к старым (новые в начале списка, старые в хвосте)
     * Однако в виджете cписок отображается наоборот - новые внизу экрана, старые вверху.
     * Однако отображение в виджете не влияет на порядок в самом списке. Виджет делает реверс на лету.
     */
    var list by mutableStateOf(MessageList.empty())

    /** Имеются новые непрочитанные, используется для показа кнопки "вниз" */
    var isNewerUnread by mutableStateOf(false)

    /** Флаг принудительного скролла в начало списка (то есть в низ экрана) */
    var forceScrollToTop by mutableStateOf(false)

    // пока не используется
    var isLoading by mutableStateOf(false)

    suspend fun fetchTop() = fetch(FetchMode.TOP)
    suspend fun fetchOlder() = fetch(FetchMode.OLDER)
    suspend fun fetchNewer() = fetch(FetchMode.NEWER)

    private suspend fun fetch(fetchMode: FetchMode) {
        isLoading = true
        forceScrollToTop = false
        try {
            when (fetchMode) {
                FetchMode.TOP -> {
                    val bath = repository.fetchMessages()
                    log.info(null, "Top batch loaded: ${bath.all.size} items")
                    list = bath
                    forceScrollToTop = true
                }

                FetchMode.OLDER -> {
                    val bath = repository.fetchMessages(olderThan = list.all.lastOrNull())
                    if (bath.all.isNotEmpty()) {
                        log.info(null, "Batch of older loaded: ${bath.all.size} items")
                    }
                    list = MessageList(
                        all = list.all + bath.all,
                        isOlderAvailable = bath.isOlderAvailable,
                        error = bath.error,
                    )
                }

                FetchMode.NEWER -> {
                    val bath = repository.fetchMessages(newerThan = list.all.firstOrNull())
                    if (bath.all.isNotEmpty()) {
                        log.info(null, "Batch of newer loaded: ${bath.all.size} items")
                        isNewerUnread = true
                    }
                    list = MessageList(
                        all = bath.all + list.all,
                        isOlderAvailable = list.isOlderAvailable,
                        error = bath.error
                    )
                }
            }
        } catch (e: Throwable) {
            throw e
        } finally {
            isLoading = false
        }
    }
}
