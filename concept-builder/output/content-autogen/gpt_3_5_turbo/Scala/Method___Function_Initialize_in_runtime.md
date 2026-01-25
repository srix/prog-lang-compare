In Scala, functions and methods can be defined and initialized at runtime through the use of anonymous functions or lambda expressions.

To initialize a function or method at runtime using an anonymous function, simply define the function or method signature using the "->" symbol, followed by the function body. Here's an example:

```scala
val add = (x: Int, y: Int) => x + y
```

In this example, we've defined a method called "add" that takes in two integer parameters and returns their sum. The "->" symbol separates the function signature from the function body, which in this case is a simple addition operation.

Another way to define methods at runtime is by using the "def" keyword along with a function type, as follows:

```scala
def multiply(x: Int, y: Int): Int = x * y
```

In this example, we've defined a method called "multiply" that takes in two integer parameters and returns their product. The "def" keyword is used to define methods in Scala, followed by the method name, the parameters in parentheses, and the return type after a colon. The function body is defined after the equals sign.

These are just a few examples of how to initialize methods or functions at runtime in Scala. Anonymous functions and lambda expressions provide a convenient way to create methods on the fly, and the "def" keyword allows for more traditional method definitions with explicit return types.