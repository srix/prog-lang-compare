To count the number of elements in an array matching a certain condition in Julia, you can use the `count` function along with the appropriate condition. The basic syntax for the `count` function is as follows:

```julia
count(condition, collection)
```

where `condition` is a function that takes an element in `collection` as input and returns a `Bool` indicating whether the condition is true or false, and `collection` is the array or collection you want to count elements from.

For example, let's say we have an array of integers `x`:

```julia
x = [1, 2, 3, 4, 5]
```

If we want to count the number of elements in `x` that are greater than 2, we can define a function that checks if each element is greater than 2:

```julia
function is_greater_than_two(x)
    return x > 2
end
```

Then we can use this function in the `count` function as follows:

```julia
count(is_greater_than_two, x)
```

This will return the output:

```
3
```

which indicates that there are 3 elements in `x` that satisfy the condition of being greater than 2.

Alternatively, we can use an anonymous function to achieve the same result in a simpler way:

```julia
count(x -> x > 2, x)
```

This will output `3` as well.

In summary, the `count` function in Julia can be used to count the number of elements in an array or collection matching a certain condition, by providing the condition as a function and the collection containing the elements to count.