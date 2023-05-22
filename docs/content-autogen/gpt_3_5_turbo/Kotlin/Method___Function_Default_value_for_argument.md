In Kotlin, you can use default values for function or method arguments as a way to provide a default value when the caller doesn't provide a value for that argument. This can be useful to simplify function calls and reduce the amount of boilerplate code required to call a function.

Here's an example:

```kotlin
fun greet(name: String = "friend") {
    println("Hello, $name!")
}

// calling with a provided argument
greet("John") // prints "Hello, John!"

// calling without a provided argument
greet() // prints "Hello, friend!"
```

In this example, the function `greet()` takes a single argument `name` with a default value of `"friend"`. When called with an argument, the provided value is used. When called without an argument, the default value of `"friend"` is used instead.

You can also use named arguments to override default values, like this:

```kotlin
// calling with a named argument
greet(name = "Jane") // prints "Hello, Jane!"
```

Here, the named argument `name` is used to specify a value of `"Jane"`, overriding the default value of `"friend"`. This allows you to provide values for specific arguments without having to specify values for all arguments.