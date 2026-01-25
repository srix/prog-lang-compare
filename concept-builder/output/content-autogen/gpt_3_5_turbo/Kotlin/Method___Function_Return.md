In Kotlin, we can return a value from a method or function using the `return` keyword. The syntax to return a value in Kotlin is as follows:

```
fun functionName(arguments) : returnType {
   // code logic
   return returnValue
}
```

Here, `functionName` is the name of the function, `arguments` are the input parameters passed to the function, `returnType` is the type of value that the function will return and `returnValue` is the value that the function will return.

For example, let's say we want to create a function that takes two integer parameters and returns their sum. Here's how we can define such a function in Kotlin:

```
fun sum(a: Int, b: Int): Int {
   return a + b
}
```

In this example, `sum` is the function name, which takes two integer inputs (`a` and `b`). The return type of this function is `Int`, and it returns the sum of `a` and `b`.

We can also use a shorthand to return values in Kotlin if the function is a single expression function. For instance, the above function could be written as:

```
fun sum(a: Int, b: Int) = a + b
```

This has the same effect as the previous function, as it returns the sum of the parameters passed into it.

In conclusion, returning values in Kotlin functions is an essential concept that forms a part of the language's syntax, and it allows us to write programs that are not only efficient but also easier to understand and maintain.