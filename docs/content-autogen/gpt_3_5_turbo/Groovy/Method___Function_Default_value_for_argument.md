In Groovy, you can set default values for method or function arguments by using the `=` operator. This means that if the argument value is not specified when calling the method or function, the default value will be used.

Here is an example of a method with a default value:

```
def greet(name = "World") {
    println "Hello, $name!"
}

greet() // prints "Hello, World!"
greet("John") // prints "Hello, John!"
```

As you can see, the `greet` method takes an argument called `name` with a default value of "World". When calling the method without providing a value for `name`, it uses the default value. When calling the method with a specific name, it uses the provided value instead of the default value.

You can also have multiple arguments with default values:

```
def makeDrink(drink = "coffee", size = "medium") {
    println "You ordered a $size $drink"
}

makeDrink() // prints "You ordered a medium coffee"
makeDrink("latte") // prints "You ordered a medium latte"
makeDrink("espresso", "large") // prints "You ordered a large espresso"
```

In this example, the `makeDrink` function has two arguments with default values: `drink` and `size`. If no values are provided, it uses the default values ("coffee" and "medium"). If only one value is provided, it uses the default value for the other argument. If two values are provided, it uses both values instead of the default values.

Overall, using default values for arguments in methods or functions can make your code more flexible and easier to use by providing default values for arguments that may not change frequently.