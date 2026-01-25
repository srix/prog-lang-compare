In Groovy, you can initialize a method or function at runtime using closures. A closure is a code block that can be stored as a variable, passed as an argument to a method or function, and executed later on.

Here is an example of initializing a method using a closure in Groovy:

```groovy
def greet = { name -> "Hello, $name!" }
println greet("John")     // prints "Hello, John!"
println greet("Mary")     // prints "Hello, Mary!"
```

In this code, `greet` is a closure that takes a `name` parameter and returns a greeting message that includes the name. We can call `greet` multiple times with different `name` values and get different output each time.

Here is an example of initializing a function using a closure in Groovy:

```groovy
def calculate = { x, y -> x + y }
println calculate(2, 3)   // prints 5
println calculate(5, 7)   // prints 12
```

In this code, `calculate` is a closure that takes two parameters (`x` and `y`) and returns their sum. We can call `calculate` multiple times with different parameter values and get different output each time.

In summary, initializing a method or function at runtime in Groovy is straightforward using closures. You can define a closure that implements the desired logic and then store it as a variable or pass it as an argument to a method or function to be executed later on.