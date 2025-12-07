import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.renderComposable
import core.HumanErrorInfo
import core.log
import view.ErrorWidget
import view.HomePage
import view.WaitingWidget

fun main() {
    renderComposable(rootElementId = "root") {
        App()
    }
}

sealed interface InitState {
    object Loading : InitState
    data class Error(val error: HumanErrorInfo) : InitState
    object Success : InitState
}

@Composable
fun App() {
    var initState by remember { mutableStateOf<InitState>(InitState.Loading) }

    LaunchedEffect(Unit) {
        try {
            initApp()
            initState = InitState.Success
        } catch (e: Throwable) {
            initState = InitState.Error(log.error(e))
        }
    }


    when (val v = initState) {
        is InitState.Loading -> WaitingWidget()
        is InitState.Error -> ErrorWidget(v.error)
        is InitState.Success -> HomePage()
    }
}
