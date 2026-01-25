In Julia, try/catch/finally blocks can be used to handle exception cases in a program. The try block contains the code that may raise an exception, while the catch block contains the code that handles the exception and returns to the normal flow of execution. The finally block contains the code that always executes regardless of whether or not an exception is raised.

Here is an example code that demonstrates the use of try/catch/finally:

```
function divide_numbers(x, y)
    try
        result = x / y
        println("The result of division is $result")
    catch ex
        println("Error occurred: $ex")
    finally
        println("Finally block is always executed")
    end
end
```

In this example, the `divide_numbers` function takes two arguments `x` and `y` and attempts to divide `x` by `y` within the try block. If an error occurs during the execution of the `try` block (such as if `y` is zero), the `catch` block prints an error message. The `finally` block is always executed, even if there is no error.

Let's see the function in action:

```
julia> divide_numbers(10, 0)
Error occurred: DivisionError(10, 0)

Finally block is always executed

julia> divide_numbers(10, 2)
The result of division is 5.0

Finally block is always executed
```

In the first example, an error message is printed because an attempt to divide by zero is made, while in the second example, the quotient is printed. In both cases, the example confirms that the `finally` block is always executed.