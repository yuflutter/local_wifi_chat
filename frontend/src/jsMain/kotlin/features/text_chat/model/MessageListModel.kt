package features.text_chat.model

import androidx.compose.runtime.*
import core.di
import core.log

private enum class FetchMode { FIRST, NEXT, REFRESH }

class MessageListModel(
    val repository: AbstractMessageRepository = di<AbstractMessageRepository>()
) {
    var state by mutableStateOf(MessageList.empty())

    suspend fun fetchFirst() = fetch(FetchMode.FIRST)
    suspend fun fetchNext() = fetch(FetchMode.NEXT)
    suspend fun fetchRefresh() = fetch(FetchMode.REFRESH)

    private suspend fun fetch(fetchMode: FetchMode) {
        when (fetchMode) {
            FetchMode.FIRST -> {
                val bath = repository.fetchMessages()
                state = bath
                log.info("List fetch", "First batch loaded: ${bath.all.size} items")
            }

            FetchMode.NEXT -> {
                val bath = repository.fetchMessages(olderThan = state.all.lastOrNull())
                state = MessageList(all = state.all + bath.all, hasMore = bath.hasMore, error = bath.error)
                log.info("List fetch", "Next batch loaded: ${bath.all.size} items")
            }

            FetchMode.REFRESH -> {
                val bath = repository.fetchMessages(newerThan = state.all.firstOrNull())
                state = MessageList(all = bath.all + state.all, hasMore = state.hasMore, error = bath.error)
                if (bath.all.isNotEmpty()) {
                    log.info("List fetch", "Batch of new ones loaded: ${bath.all.size} items")
                }
            }
        }
    }
}

