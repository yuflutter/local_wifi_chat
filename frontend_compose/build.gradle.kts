import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

plugins {
    kotlin("multiplatform") version "1.9.20"
    kotlin("plugin.serialization") version "1.9.20"
    id("org.jetbrains.compose") version "1.5.10"
}

group = "com.example"
version = "1.0.0"

repositories {
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    google()
}

val generateBuildInfo = tasks.register("generateBuildInfo") {
    val outputDir = file("${layout.buildDirectory.get().asFile}/generated/kotlin")
    val buildInfoFile = file("${outputDir}/BuildInfo.kt")
    val flavorFile = file("${outputDir}/AppFlavor.kt")
    
    outputs.files(buildInfoFile, flavorFile)
    outputs.upToDateWhen { false } // Всегда перегенерировать
    
    doLast {
        outputDir.mkdirs()
        val buildTime = LocalDateTime.now()
            .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))
        
        // Определяем flavor по наличию production задач в графе
        val isProduction = gradle.startParameter.taskNames.any { 
            it.contains("Production", ignoreCase = true) 
        }
        val flavor = if (isProduction) "Prod" else "Debug"
        
        println("Generating BuildInfo with flavor: $flavor")
        
        buildInfoFile.writeText("""
            object BuildInfo {
                const val VERSION = "${project.version}"
                const val BUILD_TIME = "$buildTime"
            }
        """.trimIndent())
        
        flavorFile.writeText("""
            internal enum class Flavors { Debug, Prod }
            internal val flavor = Flavors.$flavor
        """.trimIndent())
    }
}

kotlin {
    js(IR) {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
        binaries.executable()
    }
    
    sourceSets {
        val jsMain by getting {
            kotlin.srcDir("${layout.buildDirectory.get().asFile}/generated/kotlin")
            
            dependencies {
                implementation(compose.html.core)
                implementation(compose.runtime)
                implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.4.1")
                implementation("org.jetbrains.kotlinx:kotlinx-collections-immutable:0.3.6")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0")
                implementation("io.ktor:ktor-client-core:2.3.7")
                implementation("io.ktor:ktor-client-js:2.3.7")
                implementation("io.ktor:ktor-client-content-negotiation:2.3.7")
                implementation("io.ktor:ktor-serialization-kotlinx-json:2.3.7")
            }
        }
    }
}

tasks.named("compileKotlinJs") {
    dependsOn(generateBuildInfo)
}

tasks.named("compileDevelopmentExecutableKotlinJs") {
    dependsOn(generateBuildInfo)
}

tasks.named("compileProductionExecutableKotlinJs") {
    dependsOn(generateBuildInfo)
}
