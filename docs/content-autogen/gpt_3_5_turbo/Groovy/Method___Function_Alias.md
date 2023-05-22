In Groovy, an alias is a way of creating an alternative name for a command or function. It is especially useful when you want to have a shorter and more convenient name for a long and complex command or function. 

Here's an example of how to use alias in Groovy:

```groovy
// Define a long and complex command
def longCommand = "git pull origin master"

// Create an alias for the long command
alias g = longCommand

// Now you can use the alias to execute the long command
g()
```

In the example above, we created an alias `g` for the long and complex command `"git pull origin master"`. We used the `alias` keyword to define the alias and assigned it to the long command. 

Once the alias is defined, you can use it to execute the long command by simply calling the alias name followed by the parentheses `()`. In this case, `g()` will execute `"git pull origin master"`.

Here's another example that shows how to use alias to create a shorter name for a function:

```groovy
// Define a function that does some calculations
def calculate(x,y) {
    return x + y * 2
}

// Create an alias for the function
alias calc = calculate

// Now you can use the alias instead of the function name
def result = calc(3,4)
println result
```

In the example above, we defined a function `calculate` that takes two arguments and returns the result of a simple calculation. We then created an alias `calc` for the function using the `alias` keyword.

Once the alias is defined, we can call it by its name `calc` instead of the function name `calculate`. In this case, `calc(3,4)` will return the result of the calculation, which is 11.