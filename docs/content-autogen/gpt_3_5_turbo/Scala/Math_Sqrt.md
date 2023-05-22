To get the square root of a number in Scala, you can use the `scala.math.sqrt()` function. This function returns the positive square root of a given number. 

Here is an example code snippet:

```scala
val num = 25
val sqrtNum = scala.math.sqrt(num)

println(sqrtNum) // Output: 5.0
```

In this example, we start by defining the variable `num` with a value of `25`. Then, we use the `scala.math.sqrt()` function to find the square root of `num` and assign it to the variable `sqrtNum`. Finally, we print the value of `sqrtNum` which is `5.0`.

You can also calculate the square root of a user input by first reading the input using the `scala.io.StdIn` package. Here is an example code snippet:

```scala
import scala.io.StdIn

println("Enter a number: ")
val num = StdIn.readDouble()
val sqrtNum = scala.math.sqrt(num)

println("The square root of " + num + " is " + sqrtNum)
```

In this example, we first import the `scala.io.StdIn` package to read user input. Then, we prompt the user to enter a number using the `println()` function. We read the input using the `readDouble()` function and assign it to the variable `num`. We then calculate the square root of `num` using the `scala.math.sqrt()` function and assign it to the variable `sqrtNum`. Finally, we print a message that tells the user what number was entered and what its square root is.