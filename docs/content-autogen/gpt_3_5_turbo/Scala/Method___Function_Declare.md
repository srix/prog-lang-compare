To declare a method or function in Scala, you can follow these steps:

1. Start by using the `def` keyword, which stands for "define". 
2. Then, give your method or function a name. 
3. After the name, enclose any input parameters in parentheses, using the format `(param1: DataType, param2: DataType)`. If there are no input parameters, just use empty parentheses like `()` or use underscore `_` to indicate no parameters.
4. Follow the input parameter list by a colon `:` and specify the data type of the result, using the format `: DataType`.
5. Finally, enclose the body of your method or function in curly braces `{}`, with the Scala code you want to execute provided inside. 

Here are some examples:

```scala
// A function with no input parameters that returns a String value
def greet(): String = {
   "Hello, Scala!"
}

// A method that takes an Integer parameter and returns a Boolean value
def isEven(num: Int): Boolean = {
   num % 2 == 0
}

// A function that takes two Double parameters and returns their sum
def sum(a: Double, b: Double): Double = {
   a + b
}
```

In the first example, the method `greet` takes no input parameters and returns a `String` value.

In the second example, the method `isEven` takes an `Int` input parameter named `num` and returns a `Boolean` value indicating whether that input parameter is even or not.

In the third example, the function `sum` takes two `Double` input parameters named `a` and `b` and returns their sum.