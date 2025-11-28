package features.text_chat.model

import androidx.compose.runtime.*
import androidx.compose.runtime.setValue
import core.di
import core.log

private enum class FetchMode { TOP, OLDER, NEWER }

class MessageListModel(
    val repository: AbstractMessageRepository = di<AbstractMessageRepository>()
) {
    var list by mutableStateOf(MessageList.empty())

    var isLoading by mutableStateOf(false)

    // флаг первой загрузки, используется для принудительного скролла в конец
    var isFirstFetch by mutableStateOf(false)

    // имеются новые непрочитанные, используется для показа кнопки "вниз"
    var isNewerUnread by mutableStateOf(false)

    suspend fun fetchTop() = fetch(FetchMode.TOP)
    suspend fun fetchOlder() = fetch(FetchMode.OLDER)
    suspend fun fetchNewer() = fetch(FetchMode.NEWER)

    private suspend fun fetch(fetchMode: FetchMode) {
        isLoading = true
        try {
            when (fetchMode) {
                FetchMode.TOP -> {
                    val bath = repository.fetchMessages()
                    list = bath
                    isFirstFetch = true
                    log.info(null, "Top batch loaded: ${bath.all.size} items")
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
                    isFirstFetch = false
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
                    isFirstFetch = false
                }
            }
        } catch (e: Throwable) {
            isLoading = false
            throw e
        }
    }
}
