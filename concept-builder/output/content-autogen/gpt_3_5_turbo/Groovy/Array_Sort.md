In Groovy, you can sort an array in ascending or descending order using the `sort()` method. Here's an example:

```groovy
// create an array of numbers
def numbers = [5, 2, 8, 1, 9]

// sort the array in ascending order
numbers.sort()
println numbers // output: [1, 2, 5, 8, 9]

// sort the array in descending order
numbers.sort { a, b -> b <=> a }
println numbers // output: [9, 8, 5, 2, 1]
```

In the above code, we created an array of numbers and sorted it using the `sort()` method. The first call to `sort()` sorts the array in ascending order. The second call to `sort()` specifies a closure that returns `b <=> a`, which sorts the array in descending order.