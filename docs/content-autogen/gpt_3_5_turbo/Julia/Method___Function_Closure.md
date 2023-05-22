In Julia, a closure is a function object that has access to variables in its parent scope. The closure can access and modify these variables even after the parent function has returned. The syntax for creating a closure in Julia involves defining a function within another function.

Here's an example that uses closure to create a counter:

```
function make_counter()
    count = 0
    function counter()
        nonlocal count
        count += 1
        return count
    end
    return counter
end

counter = make_counter()
println(counter()) # Output: 1
println(counter()) # Output: 2
println(counter()) # Output: 3
```

In the above code, `make_counter` creates a new function `counter` and returns it. The `count` variable is defined within `make_counter` and is accessible within `counter` due to closure. 

When `counter` is called, it increments the count variable and returns the new value. The next time `counter` is called, it accesses the updated `count` variable and increments it again. This process continues as long as the `counter` function is used.

Another example is a function that returns another function that computes logarithms to a given base:

```
function make_logarithm_function(base)
    return x -> log(x, base)
end

log_base_2 = make_logarithm_function(2)
println(log_base_2(8)) # Output: 3.0
```

In the above code, `make_logarithm_function` returns a closure, which is a function that takes a single argument and returns the logarithm of that argument to the given `base` value. The `log_base_2` variable is assigned the function returned by `make_logarithm_function(2)`. 

When `log_base_2` is called with `8`, it returns `3.0`, which is the logarithm of 8 to the base 2.