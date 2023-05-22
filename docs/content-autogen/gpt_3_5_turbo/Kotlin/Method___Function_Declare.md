In Kotlin, you can declare a function using the `fun` keyword. Here is how you can declare a simple function named `printMessage` that takes no parameters and returns nothing (i.e., a unit):

```
fun printMessage() {
    println("Hello, world!")
}
```

If you want to declare a function that takes parameters, you simply list them inside the parentheses after the function name. Here is an example of a function named `sum` that takes two integers as parameters and returns their sum:

```
fun sum(a: Int, b: Int): Int {
    return a + b
}
```

You can also use a shorthand notation for functions that simply return an expression. Here is the same `sum` function again, but in shorthand notation:

```
fun sum(a: Int, b: Int) = a + b
```

Finally, you can declare a function that takes a variable number of arguments using the `vararg` keyword. Here is an example of a function named `sumAll` that takes a variable number of integers as parameters and returns their sum:

```
fun sumAll(vararg numbers: Int): Int {
    var sum = 0
    for (n in numbers) {
        sum += n
    }
    return sum
}
```

You can now call these functions from within your Kotlin code. For example, to call the `printMessage` function, you simply write:

```
printMessage()
```

And to call the `sum` function and store the result in a variable named `result`, you would write something like:

```
val result = sum(3, 5)
```