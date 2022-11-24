import com.github.gradle.node.npm.task.NpmTask
import java.io.ByteArrayOutputStream
import java.net.URI
import java.time.LocalDateTime.now
import java.time.format.DateTimeFormatter.ofPattern

plugins {
  id("com.github.node-gradle.node") version "3.2.1"
}

fun gitBranch(): String {
  return try {
    val byteOut = ByteArrayOutputStream()
    project.exec {
      commandLine = "git rev-parse --abbrev-ref HEAD".split(" ")
      standardOutput = byteOut
    }
    String(byteOut.toByteArray()).trim().also {
      if (it == "HEAD") {
        logger.warn("Unable to determine current branch: Project is checked out with detached head!")
      }
    }
  } catch (e: Exception) {
    logger.warn("Unable to determine current branch: ${e.message}")
    "Unknown Branch"
  }
}

val setVersion by tasks.registering(NpmTask::class) {
  description = "Set version in package.json and package-lock.json."
  args.set(listOf("version", "--allow-same-version", "--no-git-tag-version", "${project.version}"))
}

val setTicketVersion by tasks.registering(NpmTask::class) {
  var suffix = ""
  val branch = gitBranch()
  val date = now().format(ofPattern("yyyyMMddHHmmss"))

  if (branch.indexOf('/') >= 0) {
    suffix = "-${branch.substring(branch.indexOf('/')+1)}.${date}"
  }

  args.set(listOf("version", "--allow-same-version", "${version}${suffix}".toLowerCase()))
}

val resetVersion by tasks.registering(NpmTask::class) {
  args.set(listOf("version", "--allow-same-version", "${version}"))
}
