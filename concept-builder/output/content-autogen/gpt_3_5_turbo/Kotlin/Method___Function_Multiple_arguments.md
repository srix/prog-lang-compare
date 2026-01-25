In Kotlin, we can pass multiple arguments to a function in the following way:

```
fun functionName(arg1: type1, arg2: type2, arg3: type3, ...): returnType {
    // function body
}
```

Here's an example of a function that accepts three integer arguments and returns their sum:

```
fun sum(num1: Int, num2: Int, num3: Int): Int {
    return num1 + num2 + num3
}

// Calling the function
val result = sum(10, 20, 30)

// Output: result = 60
```

In the example above, we used three arguments of type `Int` and returned their sum. 

We can also use default values for the arguments in a function. Here's an example:

```
fun fullName(firstName: String, lastName: String = ""): String {
    return "$firstName $lastName"
}

// Calling the function
val withoutLastName = fullName("John")
val withLastName = fullName("Jane", "Doe")

// Output:
// withoutLastName = "John "
// withLastName = "Jane Doe"
```

In the example above, the `fullName()` function takes 2 parameters - `firstName` and `lastName`. The `lastName` parameter has a default value of an empty string. Therefore, if we don't provide a value for `lastName`, it falls back to the default value. We can also explicitly pass a value for `lastName` like we did in the `withLastName` variable.