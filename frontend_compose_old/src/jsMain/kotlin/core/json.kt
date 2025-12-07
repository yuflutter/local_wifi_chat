package core

import kotlinx.serialization.json.Json

val appJson = Json {
    ignoreUnknownKeys = true
    encodeDefaults = true
    isLenient = true
}

val appJsonPretty = Json {
    ignoreUnknownKeys = true
    encodeDefaults = true
    isLenient = true
    prettyPrint = true
}