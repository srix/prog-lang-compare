In Groovy, you can use multiple arguments in a method or function by defining them within the parentheses after the method name. Here is an example:

```
def calculateSum(int a, int b) {
    return a+b
}

println(calculateSum(2,3))
```

In this example, we have defined a function called `calculateSum` that takes two arguments `a` and `b`. The function simply adds the two arguments together and returns the result. We then call the function with the values `2` and `3` as the arguments, and the result `5` is printed to the console.

You can also define functions with optional arguments in Groovy using the `?` operator. Here is another example:

```
def greet(String name, String? message = null) {
    if (message) {
        println("$message, $name!")
    } else {
        println("Hello, $name!")
    }
}

greet("John")
greet("Jane", "Good morning")
```

In this example, we have defined a function called `greet` that takes two arguments: `name` and an optional argument `message`. If the `message` argument is provided, the function prints out the message followed by the name. Otherwise, it simply greets the person by name.

We call the function twice, first with just the `name` argument, and then with both `name` and `message`. The output of the first call is "Hello, John!", while the output of the second call is "Good morning, Jane!".