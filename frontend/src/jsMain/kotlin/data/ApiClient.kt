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
        try {
            val reqNum = if (!noLog) reqLogFunc() else null

            val response: HttpResponse = http.get(url)
            checkAndLogResponse(reqNum, response, reqLogFunc)

            return response.body()

        } catch (e: Throwable) {
            // если запрос не залогирован, но выполнен с ошибкой - принудительно логируем и запрос
            reqLogFunc()
            throw log.error(e)
        }
    }

    suspend inline fun <reified T : Any, reified R : Any> post(
        url: Url,
        requestObject: T,
        headersMap: Map<String, String>? = null
    ): R {
        try {
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

        } catch (e: Throwable) {
            throw log.error(e)
        }
    }

    suspend fun checkAndLogResponse(reqNum: Int?, response: HttpResponse, reqLogFun: (() -> Int)? = null) {
        require(!(reqNum == null && reqLogFun == null)) {
            "Если не предоставлен номер лога запроса, должна быть предоставлена функция логирования запроса"
        }

        if (response.status != HttpStatusCode.OK) {
            val errorBody = response.bodyAsText()
            // если запрос не залогирован, но выполнен с ошибкой - принудительно логируем и запрос
            log.apiRes(reqNum ?: reqLogFun!!(), response.status, errorBody)
            throw Exception("API error: ${response.status}\n$errorBody")

        } else if (reqNum != null) {
            log.apiRes(reqNum, response.status, response.bodyAsText())
        }
    }
}