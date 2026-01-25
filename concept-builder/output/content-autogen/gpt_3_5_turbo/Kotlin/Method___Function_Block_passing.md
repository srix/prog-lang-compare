Block passing is a feature in Kotlin that allows you to pass a block of code as a parameter to a function. This is often useful in situations where you want to pass an action or behavior to a function without explicitly defining a new function or lambda. 

Here's an example of how to use block passing in Kotlin:

```kotlin
fun doSomething(callback: () -> Unit) {
    // do something
    callback()
}

fun main() {
    doSomething {
        println("Callback is called!")
    }
}
```

In this example, the `doSomething` function takes a callback function as a parameter. The parameter is defined as a lambda expression, which takes no arguments and returns `Unit`. In the main function, we call `doSomething` and pass in a code block that will be executed when the callback is called. The code block simply prints a message to the console.

Another example of block passing is when using the `apply` or `also` functions in Kotlin. These functions allow you to pass a block of code to execute on an object within a function call. Here's an example:

```kotlin
data class Person(var name: String, var age: Int)

fun main() {
    val person = Person("John", 25)
    person.apply {
        age += 1
        name = "Jane"
    }
    println(person)
}
```

In this example, we create a `Person` object and then use the `apply` function to pass a block of code that will modify the object's properties. The block increments the age by 1 and changes the name to "Jane". The `apply` function then returns the modified object, which we print to the console. 

Overall, block passing is a powerful feature in Kotlin that allows you to write more concise, expressive code by passing behavior as a parameter to functions.