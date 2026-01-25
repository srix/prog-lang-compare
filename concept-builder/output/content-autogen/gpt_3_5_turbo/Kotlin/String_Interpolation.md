Interpolation in Kotlin means concatenating the values of variables or expressions into a string. Kotlin provides an easy way to interpolate strings by using string templates. 

The syntax for string templates is to use a dollar sign ($) followed by a variable or expression in the curly braces ({ }). Here are some examples:

1. Interpolating a variable into a string:

```
val name = "John"
val message = "Hello, $name!"
println(message)
```
Output: "Hello, John!"

2. Interpolating an expression into a string:

```
val a = 10
val b = 20
val result = "The sum of $a and $b is ${a + b}."
println(result)
```
Output: "The sum of 10 and 20 is 30."

3. Interpolating a string of multiple expressions:

```
val firstName: String = "John"
val lastName: String = "Doe"
val age: Int = 35
val city: String = "New York"

val message = "${firstName.capitalize()} ${lastName.toUpperCase()} is $age years old and lives in $city."
println(message)
```
Output: "John DOE is 35 years old and lives in New York." 

Note that you can use any valid expression inside the curly braces, including method or property calls, arithmetic or logical operations, and even nested expressions. Interpolation in Kotlin is a powerful and concise way to construct strings with dynamic content.