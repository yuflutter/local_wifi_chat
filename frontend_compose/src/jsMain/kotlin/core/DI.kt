package core

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

/**
 * Простейший DI для глобальных зависимостей.
 * Поддерживает стек и полиморфизм.
 */
object DI {
    val instances = mutableListOf<Any>()

    fun put(instance: Any) = instances.add(0, instance)

    fun putAll(instances: List<Any>) = instances.forEach { put(it) }

    suspend fun putAndInit(instance: Initializable) {
        put(instance)
        instance.init()
    }

    suspend fun putAndInitAll(instances: List<Initializable>) {
        withContext(Dispatchers.Main) { // избегаем многопоточности при инициализации зависимостей
            coroutineScope {
                instances.forEach { launch { putAndInit(it) } }
            }
        }
    }

    inline fun <reified T> get(): T {
        for (i in instances) {
            if (i is T) return i
        }
        throw Exception("Instance of ${T::class.simpleName} is not found in global DI")
    }
}

/**
 * Краткий синоним для DI.get()
 */
inline fun <reified T> di(): T = DI.get()

/**
 * Асинхронный инициализатор для глобальных объектов.
 * Должен запускаться при старте главной страницы, с выводом ошибок туда же.
 */
interface Initializable {
    suspend fun init()
}

/**
 * Пример использования с полиморфизмом
 */
private abstract class AbstractUserSession
private class MyUserSession : AbstractUserSession()

fun exampleOfUseDI() {
    DI.put(MyUserSession())
    println(di<AbstractUserSession>())
    println(di<MyUserSession>())
}
