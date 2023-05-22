In Go, you can sort arrays using the `sort` package which provides various sorting functions. Here's an example of sorting an array of integers in ascending and descending order:

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    arr := []int{5, 2, 7, 3, 9, 1}

    // sorting in ascending order
    sort.Ints(arr)
    fmt.Println(arr) // Output: [1 2 3 5 7 9]

    // sorting in descending order
    sort.Sort(sort.Reverse(sort.IntSlice(arr)))
    fmt.Println(arr) // Output: [9 7 5 3 2 1]
}
```

The `sort.Ints()` function is used to sort the array in ascending order. The `sort.Sort()` function is used to sort the array in descending order along with `sort.Reverse()` function and `sort.IntSlice()` type conversion. You can use the same `sort` package to sort other types of arrays like float64, strings, and others as well.