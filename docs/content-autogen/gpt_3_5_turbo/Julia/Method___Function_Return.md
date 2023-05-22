In Julia, to return a value from a method or function, you can use the `return` keyword followed by the value you want to return. Here are some examples:

Example 1: A function that returns the sum of two numbers

```julia
function add(x, y)
    return x + y
end

result = add(2, 3) # result is 5
```

Explanation: The `add` function takes two arguments `x` and `y`, and returns their sum using the `return` keyword.

Example 2: A method that returns the maximum value from an array

```julia
function findmax(arr)
    max_val = arr[1]
    for val in arr
        if val > max_val
            max_val = val
        end
    end
    return max_val
end

array = [1, 4, 2, 9, 5]
result = findmax(array) # result is 9
```

Explanation: The `findmax` method takes an array `arr` as input, iterates through it to find the maximum value `max_val`, and returns it using the `return` keyword.

Note: In Julia, you can also omit the `return` keyword at the end of a function or method, and the last evaluated expression will be returned by default. For example, the `add` function from Example 1 can also be written as:

```julia
function add(x, y)
    x + y
end
``` 

Both versions of the function are equivalent and will return the same result.