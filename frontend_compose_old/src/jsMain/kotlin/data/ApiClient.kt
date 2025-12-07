package data

import core.di
import io.ktor.client.*
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.HttpResponse
import io.ktor.client.statement.bodyAsText
import io.ktor.http.HttpStatusCode
import io.ktor.serialization.kotlinx.json.*
import io.ktor.client.request.*
import io.ktor.http.*
import kotlinx.serialization.encodeToString
import AppConfig
import UserSession
import core.appJson
import core.appJsonPretty
import core.log

fun urlOf(path: String): URLBuilder = URLBuilder(di<AppConfig>().apiUrl).also { it.appendPathSegments(path) }

class ApiClient {
    val http = HttpClient {
        install(ContentNegotiation) {
            json(appJson)
        }
    }

    suspend inline fun <reified T> get(url: Url, noLog: Boolean = false): T {
        val reqLogFunc = { log.apiReq("GET", "$url") }
        val reqNum = if (!noLog) reqLogFunc() else null

        try {
            val response: HttpResponse = http.get(url)
            checkAndLogResponse(reqNum, response)
            return response.body()

        } catch (e: Throwable) {
            // если запрос не залогирован, но выполнен с ошибкой - принудительно его логируем перед выбросом ошибки
            if (reqNum == null) reqLogFunc()
            throw log.error(e)
        }
    }

    suspend inline fun <reified T : Any, reified R : Any> post(
        url: Url,
        requestObject: T,
        headersMap: Map<String, String>? = null
    ): R {
        val reqBodyText = appJsonPretty.encodeToString(requestObject)
        val reqNum = log.apiReq("POST", "$url", reqBodyText)

        val response = http.post(url) {
            setBody(reqBodyText)
            contentType(ContentType.Application.Json)
            header(di<AppConfig>().userHashHeaderKey, di<UserSession>().userHash)
            headersMap?.forEach { (key, value) -> header(key, value) }
        }
        checkAndLogResponse(reqNum, response)
        return response.body()
    }

    suspend fun checkAndLogResponse(reqNum: Int?, response: HttpResponse) {
        val status = response.status

        if (status != HttpStatusCode.OK) {
            val errorBody = response.bodyAsText()
            throw Exception("HTTP ${status}\n$errorBody")

        } else if (reqNum != null) {
            log.apiRes(reqNum, status, response.bodyAsText())
        }
    }
}