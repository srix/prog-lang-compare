Reducing an array to a single value involves applying a given operation to each element of an array and accumulating the results into a single value. In Swift, this can be achieved using the `reduce` method. 

The `reduce` method is called on an array and takes two arguments: a starting value for the accumulation and a closure that defines the operation to be applied on each element. The closure takes two arguments: the current accumulated value and the next element of the array. 

Here's an example of using `reduce` to find the sum of an array of integers:

```swift
let numbers = [1, 2, 3, 4, 5]

let sum = numbers.reduce(0, { (result, next) in
    return result + next
})

print(sum) // Output: 15
```

In this example, the starting value of the accumulation is `0` and the closure defines the addition operation. The `reduce` method applies the closure to each element and accumulates the results into the `sum` variable.

Another example is finding the maximum value in an array of integers:

```swift
let numbers = [10, 20, 5, 15, 30]

let max = numbers.reduce(Int.min, { (result, next) in
    return result < next ? next : result
})

print(max) // Output: 30
```

In this example, the starting value of the accumulation is `Int.min` and the closure defines the greater-than operation. The `reduce` method applies the closure to each element and accumulates the maximum value into the `max` variable.