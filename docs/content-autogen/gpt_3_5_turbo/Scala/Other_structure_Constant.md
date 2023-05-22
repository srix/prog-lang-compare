In Scala, a constant is a value that cannot be changed after it has been initialized. They are declared using the `val` keyword and are immutable.

Here is an example of using a constant in Scala:

```
val PI = 3.14
```

In this example, `PI` is being declared as a constant with the value of 3.14. Once the constant is defined, it cannot be changed.

Another example:

```
val str: String = "Hello, world!"
```

Here, `str` is a constant with the value of "Hello, world!" and the type of `String`.

Constants can also be used within functions:

```
def circleArea(radius: Double): Double = {
  val PI = 3.14
  PI * radius * radius
}
```

In this example, `PI` is being declared as a constant within the `circleArea` function. The value of `PI` is used in the calculation of the area of a circle based on the input radius.

Constants can help ensure the correctness of a program as they cannot be accidentally modified. They also improve performance in some cases, as the compiler can optimize constants more easily than variables.