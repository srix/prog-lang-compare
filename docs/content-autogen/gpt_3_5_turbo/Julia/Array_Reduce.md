In Julia, you can use the `reduce()` function to reduce an array to a single value. The `reduce()` function applies a binary operation to the elements of an iterable container and returns a single value.

Here are some examples:

Example 1: Summing an array

```julia
x = [1, 2, 3, 4, 5]
total = reduce(+, x) # returns 15
```

In this example, the `+` binary operation is applied to each element in the `x` array, resulting in the sum of all the elements.

Example 2: Multiplying an array

```julia
x = [1, 2, 3, 4, 5]
product = reduce(*, x) # returns 120
```

In this example, the `*` binary operation is applied to each element in the `x` array, resulting in the product of all the elements.

Example 3: Finding the maximum value in an array

```julia
x = [1, 2, 3, 4, 5]
max_value = reduce(max, x) # returns 5
```

In this example, the `max` binary operation is applied to each element in the `x` array, resulting in the maximum value.

Example 4: Concatenating an array of strings

```julia
x = ["hello", " ", "world"]
sentence = reduce(string, x) # returns "hello world"
```

In this example, the `string` binary operation is applied to each element in the `x` array, resulting in a single string concatenating all the elements.