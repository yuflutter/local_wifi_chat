import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import core.Initializable
import core.di
import kotlinx.browser.localStorage
import kotlinx.datetime.Clock
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.reflect.KProperty

class UserSession : Initializable {
    var userHash: String = ""

    var userName: String by StateWithSideEffect(
        initialValue = "",
        onValueChange = { localStorage[di<AppConfig>().userNameStorageKey] = it }
    )

    override suspend fun init() {
        val config = di<AppConfig>()

        userHash = localStorage[config.userHashStorageKey] ?: run {
            val newHash = Clock.System.now().toEpochMilliseconds().toString()
            localStorage[config.userHashStorageKey] = newHash
            newHash
        }

        userName = localStorage[config.userNameStorageKey] ?: ""
    }
}

/**
 * Пользовательский делегат, который оборачивает MutableState и добавляет логику в сеттер.
 * @param initialValue Начальное значение.
 * @param onValueChange Лямбда-функция, выполняемая при каждом изменении значения.
 */
class StateWithSideEffect<T>(
    initialValue: T,
    private val onValueChange: (T) -> Unit
) {
    private var state: MutableState<T> = mutableStateOf(initialValue)

    operator fun getValue(thisRef: Any?, property: KProperty<*>): T = state.value

    operator fun setValue(thisRef: Any?, property: KProperty<*>, value: T) {
        val oldValue = state.value
        state.value = value // Обновляем state (вызывает перекомпозицию UI)
        if (oldValue != value) {
            onValueChange(value) // Здесь вызываем дополнительную логику
        }
    }
}
