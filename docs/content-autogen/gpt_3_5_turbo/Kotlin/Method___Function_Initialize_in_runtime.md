In Kotlin, a function can be initialized dynamically at runtime using the `::` operator, which is used to reference a member or a top-level function. Here's an example of dynamically initializing a function at runtime:

```
fun main() {
    // dynamically initializing a function at runtime
    val functionReference = ::addNumbers
    
    // calling the initialized function with arguments
    val result = functionReference.invoke(5, 10)
    
    println("The result is: $result")
}

fun addNumbers(num1: Int, num2: Int): Int {
    return num1 + num2
}
```

In this example, the function `addNumbers` is dynamically initialized using the `::` operator and stored in a variable called `functionReference`. We then call the initialized function using the `invoke` method and pass it two arguments.

The output of the above code will be:

```
The result is: 15
```

We can also use lambda expressions to initialize functions dynamically at runtime. Here's an example:

```
fun main() {
    // dynamically initializing a function using lambda
    val functionReference = { num1: Int, num2: Int -> num1 * num2 }
    
    // calling the initialized function with arguments
    val result = functionReference.invoke(5, 10)
    
    println("The result is: $result")
}
```

In this example, we use a lambda expression to create a function that multiplies two numbers. The function is then dynamically initialized and stored in the `functionReference` variable. We then call the function using the `invoke` method and pass it two arguments.

The output of the above code will be:

```
The result is: 50
```