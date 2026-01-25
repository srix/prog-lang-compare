In Scala, multiple arguments can be passed to a method or function using a comma separated list of arguments enclosed within parentheses. 

Here's an example of a method that takes two integer arguments and returns their sum:

```Scala
def addNumbers(x: Int, y: Int): Int = {
  return x + y
}

val result = addNumbers(5, 10)
println(result) // Output: 15
```

In the above example, we have defined a method called `addNumbers` that takes two integer arguments `x` and `y` and returns their sum. We can call this method by passing two integers `5` and `10` as arguments, which will return `15` and print the output on the console.

Similarly, we can define a function with multiple arguments as shown below:

```Scala
def concatStrings(str1: String, str2: String): String = {
  return str1 + str2
}

val result = concatStrings("Hello", "World")
println(result) // Output: HelloWorld
```

In the above example, we have defined a function called `concatStrings` that takes two string arguments `str1` and `str2` and returns their concatenation. We can call this function by passing two strings `"Hello"` and `"World"` as arguments, which will return `"HelloWorld"` and print the output on the console. 

We can also use default values for arguments to make them optional while invoking a method or function with multiple arguments. Here's an example:

```Scala
def greet(name: String, message: String = "Hello"): Unit = {
  println(s"$message, $name!")
}

greet("John") // Output: Hello, John!
greet("Mary", "Hi") // Output: Hi, Mary!
```

In the above example, we have defined a method called `greet` that takes two arguments: `name` and `message`, with a default value of `"Hello"`. We can call this method by passing only the name, in which case the default message will be used, or we can pass both the name and an optional message.

Overall, using multiple arguments in Scala allows for flexibility and reusability in method and function definitions.