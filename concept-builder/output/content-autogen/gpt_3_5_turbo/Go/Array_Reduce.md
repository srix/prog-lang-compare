In Go, we can reduce an array to a single value by iterating over the array and applying a function to combine the values. The `reduce` function takes two parameters:

1. The array to reduce
2. A function that takes two arguments and returns a single value. This function should implement the operation to be performed on the array elements.

Here's an example of reducing an array of integers to its sum:

```go
package main

import "fmt"

func main() {
    arr := []int{1, 2, 3, 4, 5}
    result := reduce(arr, func(acc, cur int) int {
        return acc + cur
    })
    fmt.Println(result) // Output: 15
}

func reduce(arr []int, fn func(int, int) int) int {
    if len(arr) == 0 {
        return 0
    }

    result := arr[0]
    for i := 1; i < len(arr); i++ {
        result = fn(result, arr[i])
    }
    return result
}
```

In this example, the `reduce` function iterates over the array and applies the `+` operator to accumulate the sum of the array elements. The `reduce` function then returns the final result, which in this case is 15.

We could also use the `reduce` function to find the maximum or minimum value in an array. Here's an example of finding the maximum value of an array of integers:

```go
package main

import "fmt"

func main() {
    arr := []int{10, 20, 30, 5, 15, 25}
    result := reduce(arr, func(acc, cur int) int {
        if cur > acc {
            return cur
        } else {
            return acc
        }
     })
     fmt.Println(result) // Output: 30
}

func reduce(arr []int, fn func(int, int) int) int {
    if len(arr) == 0 {
        return 0
    }

    result := arr[0]
    for i := 1; i < len(arr); i++ {
        result = fn(result, arr[i])
    }
    return result
}
```

In this example, the `reduce` function iterates over the array and applies the maximum function to find the maximum value of the array. The `reduce` function then returns the final result, which in this case is 30.