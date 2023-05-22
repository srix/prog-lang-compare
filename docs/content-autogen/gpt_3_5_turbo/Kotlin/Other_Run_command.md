Kotlin is a programming language that can be used to run a wide range of commands to achieve different purposes. To run a command in Kotlin, you can use the built-in system function that is readily available in the standard library. The system function enables you to interact with the command line by launching an external process, which executes the desired command.

Here's an example of how to run a simple command to print "Hello, world!" to the console in Kotlin:

```
fun main() {
    val command = "echo 'Hello, world!'"
    val process = Runtime.getRuntime().exec(command)
    process.waitFor()
}
```

In this example, we first define the command as a string and then execute it using the `exec()` method of the `Runtime` class. The `waitFor()` method waits for the command to finish executing before proceeding further.

You can also pass arguments to your commands using the same approach. Here's an example of how to run a command to list all the files in a directory:

```
fun main() {
    val directory = "/my/directory/path"
    val command = "ls $directory"
    val process = Runtime.getRuntime().exec(command)
    process.waitFor()
}
```

In this example, we first define the directory path as a string and then use string interpolation to include it in the command. The `ls` command is a Linux command that lists all the files in a directory.

Note that when running commands with Kotlin, it's important to escape any special characters correctly, especially when passing user input as arguments to the command. This will ensure that the command is executed correctly and avoid any potential security issues.