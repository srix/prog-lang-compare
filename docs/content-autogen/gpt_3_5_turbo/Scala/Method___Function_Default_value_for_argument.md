In Scala, we can define default values for function/method arguments which can be used when no value or argument is passed to the function. This allows us to write more concise and readable code.

The syntax to define a default value for an argument is to specify the default value after the type of the argument. For example:

```scala
def greet(name: String = "World"): Unit = {
  println(s"Hello, $name!")
}

greet() // prints "Hello, World!"
greet("Scala") // prints "Hello, Scala!"
```

In the above example, we have defined a function `greet` which takes a parameter `name` of type `String`. We have also specified the default value for `name` as "World". When we call the function without passing any argument, it uses the default value "World". When we call the function with an argument, it uses the passed value.

We can define multiple arguments with default values. In such cases, the argument order matters and only the trailing arguments can have default values. For example:

```scala
def calc(num1: Int, num2: Int = 10, num3: Int = 20): Int = {
  num1 + num2 + num3
}

calc(5) // returns 35
calc(5, 15) // returns 40
calc(5, 15, 25) // returns 45
```

In the above example, we have defined a function `calc` which takes three parameters `num1`, `num2`, and `num3`, with default values 10 and 20 respectively. When we call the function with only one argument, it uses the default values for `num2` and `num3`. When we call the function with two arguments, it uses the passed values for `num1` and `num2`, and the default value for `num3`. When we call the function with all three arguments, it uses the passed values for all the parameters.