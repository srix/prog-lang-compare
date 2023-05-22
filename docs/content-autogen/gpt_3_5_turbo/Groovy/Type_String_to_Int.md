In Groovy, you can convert a string to an integer using the `toInteger()` method. Here is an example:

```
def myString = "42"
def myInt = myString.toInteger()

println(myInt)
```

This code defines a string variable called `myString` with a value of "42". It then converts this string to an integer using the `toInteger()` method and stores the result in a new variable called `myInt`. Finally, the code prints the value of `myInt` to the console, which should output the integer 42.

Note that if the string contains non-numeric characters, the `toInteger()` method will throw a `NumberFormatException`. For example:

```
def myString = "42abc"
try {
    def myInt = myString.toInteger()
} catch (NumberFormatException e) {
    println("Error: ${e.message}")
}
```

In this code, the string variable `myString` contains non-numeric characters ("abc"). When we try to convert this string to an integer, the `toInteger()` method throws a `NumberFormatException`. We catch this exception and print an error message to the console.