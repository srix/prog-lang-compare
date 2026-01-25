Closure in Kotlin refers to a lambda expression or anonymous function that has access to variables declared in its surrounding scope. A closure can be used to retain the value of those outer variables even after the outer function has returned.

Here's an example:

```kotlin
fun main() {
    val message = "Hello World"
    val printMessage = {
        println(message)
    }
    printMessage()
}
```

In this code snippet, we have defined a lambda expression `printMessage` which accesses the variable `message` declared in the outer scope. When we call `printMessage()`, it will print "Hello World" to the console.

Another example:

```kotlin
fun main() {
    val counter = getCounter()
    println(counter()) // prints 1
    println(counter()) // prints 2
    println(counter()) // prints 3
}

fun getCounter(): () -> Int {
    var count = 0
    return {
        count += 1
        count
    }
}
```

In this example, `getCounter` returns a lambda expression that accesses the variable `count` declared in its outer scope. We call `getCounter` and assign the returned lambda to the variable `counter`. When we invoke `counter()` multiple times, it will return the next incremented value of `count`.

Overall, closures can be a powerful tool in Kotlin for encapsulating data and functionality within a function's scope, and allowing that data to persist beyond the function's execution.