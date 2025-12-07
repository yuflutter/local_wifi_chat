package core

import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.UtcOffset
import kotlinx.datetime.offsetAt
import kotlinx.datetime.toLocalDateTime

fun toHumanTime(instant: Instant): String {
    val zone = TimeZone.currentSystemDefault()
    val local = instant.toLocalDateTime(zone)
    return buildString {
        append(local.date)
        append(" ")
        append(local.time)
        append(" ")
//        append(UtcOffset.toString())
    }
}