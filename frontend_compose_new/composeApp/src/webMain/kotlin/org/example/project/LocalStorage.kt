package org.example.project

external object localStorage {
    fun setItem(key: String, value: String)
    fun getItem(key: String): String?
}

object LocalStorage {
    fun saveAuthor(author: String) {
        localStorage.setItem("chat_author", author)
    }
    
    fun getAuthor(): String? {
        return localStorage.getItem("chat_author")
    }
    
    fun saveTheme(isDark: Boolean) {
        localStorage.setItem("chat_theme", if (isDark) "dark" else "light")
    }
    
    fun getTheme(): Boolean? {
        val theme = localStorage.getItem("chat_theme")
        return when (theme) {
            "dark" -> true
            "light" -> false
            else -> null
        }
    }
}
