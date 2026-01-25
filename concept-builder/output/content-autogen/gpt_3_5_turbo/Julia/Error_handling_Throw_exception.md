In Julia, an exception can be thrown using the `throw()` function. An exception is typically thrown when there is an error or an unexpected condition within a function.

Here's an example which throws an `ArgumentError` if the input argument to the function is less than 0:

```julia
function myfunc(x)
    if x < 0
        throw(ArgumentError("Input argument must be non-negative."))
    end
    return sqrt(x)
end
```

Now, let's test this function with different input values:

```
julia> myfunc(4)
2.0

julia> myfunc(-4)
ERROR: ArgumentError: Input argument must be non-negative.
Stacktrace:
 [1] myfunc(::Int64) at ./REPL[1]:3
 [2] top-level scope at REPL[2]:1
```

As we can see from the output, the function works perfectly fine with non-negative input values and throws an `ArgumentError` when the input value is negative.

Similarly, we can also define our own custom exceptions and throw them whenever required:

```julia
struct MyException <: Exception
    message::String
end

function myfunc2(x)
    if x == 0
        throw(MyException("Invalid input argument."))
    end
    return 1/x
end
```

Now, let's test this function with different input values:

```
julia> myfunc2(4)
0.25

julia> myfunc2(0)
ERROR: MyException("Invalid input argument.")
Stacktrace:
 [1] myfunc2(::Int64) at ./REPL[5]:3
 [2] top-level scope at REPL[6]:1
```

As we can see, the function throws our custom `MyException` when the input argument is 0.