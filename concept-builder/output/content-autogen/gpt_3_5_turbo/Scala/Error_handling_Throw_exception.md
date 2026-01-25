In Scala, you can throw an exception using the `throw` keyword followed by an instance of any `Throwable` class. Here's an example:

```
// defining a function that throws an exception
def divide(num: Int, den: Int): Int = {
  if (den == 0) {
    throw new IllegalArgumentException("denominator can't be zero.")
  }
  num / den
}

// calling the function with a valid denominator
println(divide(10, 2))

// calling the function with an invalid denominator
println(divide(10, 0))
```

In the above example, the `divide` function checks if the denominator is zero and throws an `IllegalArgumentException` if it is. The `IllegalArgumentException` is created using the `new` keyword and the message "denominator can't be zero." is passed as an argument.

When the `divide` function is called with an invalid denominator, it throws the `IllegalArgumentException`, which can be caught and handled using a `try-catch` block:

```
try {
  println(divide(10, 0))
} catch {
  case ex: IllegalArgumentException => println(ex.getMessage)
}
```

In the above example, a `try-catch` block is used to catch the `IllegalArgumentException` thrown by the `divide` function. The error message is printed to the console using the `getMessage` method of the exception object.