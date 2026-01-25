Closure in Scala refers to the ability of a function to access values that are defined outside of its own scope, particularly the values and variables defined in the enclosing scope.

Here's an example of a closure in Scala:

```
def multiplyBy(factor: Int) = (x: Int) => factor * x

val doubler = multiplyBy(2)
val tripler = multiplyBy(3)

println(doubler(5)) // Output: 10
println(tripler(5)) // Output: 15
```

In this example, we have defined a function `multiplyBy` that takes an integer value `factor` and returns a lambda function. This lambda function takes another integer value `x` and returns the product of `factor` and `x`.

The `doubler` and `tripler` values are created by calling the `multiplyBy` function with arguments of 2 and 3, respectively. These values are equal to lambda functions created by `multiplyBy` with different values of `factor`. 

Now, we can pass values to these lambda functions and they will compute the product of that value and the `factor` value passed to `multiplyBy`. In other words, `doubler` is closing over `factor=2`, and `tripler` is closing over `factor=3`.

In this example, the closure is created by the `multiplyBy` function. The lambda function returned by `multiplyBy` "closes" over the `factor` variable that is defined in the outer scope of the function. This means that even though the `factor` variable is not defined in the scope of the lambda function, it is still accessible to the lambda function at runtime.

In summary, closures in Scala are powerful constructs that allow functions to access values outside of their own scope. They are created by defining a function that returns a function, and the returned function "closes" over values defined in the outer scope of the function.