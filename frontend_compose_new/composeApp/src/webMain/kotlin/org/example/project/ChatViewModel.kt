package org.example.project

import kotlinx.coroutines.*
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

class ChatViewModel {
    private val _messages = MutableStateFlow<List<Message>>(emptyList())
    val messages: StateFlow<List<Message>> = _messages.asStateFlow()
    
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading.asStateFlow()
    
    private val backend = MockBackend()
    private var currentPage = 0
    private val scope = CoroutineScope(Dispatchers.Default)
    
    init {
        loadMoreMessages()
    }
    
    fun loadMoreMessages() {
        if (_isLoading.value) return
        
        _isLoading.value = true
        
        scope.launch {
            delay(500)
            val newMessages = backend.getMessages(currentPage)
            _messages.value = newMessages + _messages.value
            currentPage++
            _isLoading.value = false
        }
    }
    
    fun sendMessage(author: String, text: String) {
        val message = backend.sendMessage(author, text)
        _messages.value = listOf(message) + _messages.value
    }
    
    fun editMessage(messageId: Int, newText: String) {
        backend.editMessage(messageId, newText)
        _messages.value = _messages.value.map { message ->
            if (message.id == messageId) {
                message.copy(text = newText)
            } else {
                message
            }
        }
    }
}
