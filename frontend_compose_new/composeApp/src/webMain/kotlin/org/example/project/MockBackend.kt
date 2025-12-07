package org.example.project

class MockBackend {
    private val messages = mutableListOf<Message>()
    private var nextId = 1
    
    init {
        // Начальные тестовые сообщения
        repeat(20) { i ->
            messages.add(
                Message(
                    id = nextId++,
                    author = "Пользователь ${i % 5 + 1}",
                    text = "Тестовое сообщение номер $i. Это пример текста для демонстрации чата.",
                    timestamp = "12:${i.toString().padStart(2, '0')}"
                )
            )
        }
    }
    
    fun getMessages(page: Int, pageSize: Int = 10): List<Message> {
        val start = page * pageSize
        val end = minOf(start + pageSize, messages.size)
        
        return if (start < messages.size) {
            messages.subList(start, end).reversed()
        } else {
            emptyList()
        }
    }
    
    fun sendMessage(author: String, text: String): Message {
        val message = Message(
            id = nextId++,
            author = author,
            text = text,
            timestamp = getCurrentTime()
        )
        messages.add(0, message)
        return message
    }
    
    fun editMessage(messageId: Int, newText: String) {
        val index = messages.indexOfFirst { it.id == messageId }
        if (index != -1) {
            messages[index] = messages[index].copy(text = newText)
        }
    }
    
    private fun getCurrentTime(): String {
        val hour = (0..23).random()
        val minute = (0..59).random()
        return "${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}"
    }
}
