In Julia, `try`, `catch`, and `finally` are control flow constructs used to handle exceptions in a program. Here's an example of how to use them:

```
try
    # code block that might throw an exception
    result = 1 / 0
catch ex
    # handle the exception
    println("An error occurred: ", ex.msg)
finally
    # code that always runs, regardless of whether an exception was thrown
    println("Done with exception handling.")
end
```

In this example, the `try` block attempts to divide `1` by `0`, which is not possible and therefore throws a division by zero exception. The `catch` block catches this exception and prints a message to the console. The `finally` block is guaranteed to run, regardless of whether an exception was thrown or not, and in this case, it prints a message that the exception handling is completed.

Another example with a custom exception type:

```
struct CustomException <: Exception  # define a custom exception type
    message::String
end

function do_stuff(x::Int)
    if x < 0
        throw(CustomException("x must be positive."))
    end
    return x * 2
end

try
    result = do_stuff(-5)  # try calling do_stuff with a negative argument
catch ex::CustomException
    println("Caught a custom exception: ", ex.message)
catch ex
    println("Caught a generic exception: ", ex)
finally
    println("Done with exception handling.")
end
```

In this example, the `do_stuff` function takes an integer `x` and doubles it, but throws a custom exception if `x` is negative. In the `try` block, we pass `-5` to `do_stuff`, which causes it to throw a `CustomException`. The first `catch` block catches this exception and prints a message to the console. The second `catch` block catches any other type of exception that might be thrown and prints a message that a generic exception was caught. Finally, the `finally` block runs and prints a message that the exception handling is completed.