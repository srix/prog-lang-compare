In Julia, you can check if an element is included in an array using the `in` operator or the `isin()` function. 

Here's an example of using the `in` operator:

```julia
# Defining an array
fruits = ["apple", "banana", "orange", "grape"]

# Check if "banana" is included
if "banana" in fruits
    println("The array contains banana!")
end
```

Output:

```
The array contains banana!
```

And here's an example of using the `isin()` function:

```julia
# Defining an array
numbers = [1, 2, 3, 4, 5]

# Check if 6 is not included
if !isin(6, numbers)
    println("The array does not contain 6.")
end
```

Output:

```
The array does not contain 6.
```