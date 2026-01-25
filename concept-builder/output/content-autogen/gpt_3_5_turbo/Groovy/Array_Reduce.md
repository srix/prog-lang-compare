In Groovy, we can use the `inject()` method to reduce an array to a single value. The `inject()` method takes an initial value and a closure as arguments. The closure takes two parameters, an accumulator and the current element from the array.

Here's an example:

```
def numbers = [1, 2, 3, 4, 5]

// Sum the elements in the array
def sum = numbers.inject(0) { accumulator, current ->
    accumulator + current
}

println sum // Output: 15
```

In this example, we start with an initial value of 0 and add each element of the array to it. The final value of the accumulator is our sum.

We can also use `inject()` to find the product of an array:

```
def numbers = [1, 2, 3, 4, 5]

// Find the product of the elements in the array
def product = numbers.inject(1) { accumulator, current ->
    accumulator * current
}

println product // Output: 120
```

In this example, we start with an initial value of 1 and multiply each element of the array to it. The final value of the accumulator is our product.