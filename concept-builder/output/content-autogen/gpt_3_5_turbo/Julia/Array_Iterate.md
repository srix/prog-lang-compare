In Julia, we can iterate over an array using the `for` loop. The syntax for the `for` loop is as follows:

```
for var ∈ iter
    # block of code
end
```

Here, `var` is the loop variable that takes on each element of the iterable `iter` in turn, and `block of code` is the code that is executed once for each element of `iter`.

For example, let's create an array and iterate over its elements using a `for` loop:

```
# create an array
arr = [1, 2, 3, 4, 5]

# iterate over the array
for elem in arr
    println(elem)
end
```

This will print each element of the array on a new line.

We can also use the `enumerate()` function to iterate over an array and keep track of the current index:

```
# create an array
arr = [1, 2, 3, 4, 5]

# iterate over the array with index
for (i, elem) in enumerate(arr)
    println("The element at index $i is $elem")
end
```

This will print each element of the array along with its index.

We can also use a range to iterate over a subset of the array:

```
# create an array
arr = [1, 2, 3, 4, 5]

# iterate over a range of the array
for elem in arr[2:4]
    println(elem)
end
```

This will print the elements of the array at index 2, 3, and 4.