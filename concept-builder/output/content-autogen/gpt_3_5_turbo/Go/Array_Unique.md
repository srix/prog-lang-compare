To get unique elements of an array in Go, we can create a new slice and iterate over the original array. For each element in the original array, we can check if it exists in the new slice. If it doesn't, we can add it to the new slice.

Here's an example:

```
package main

import "fmt"

func getUnique(arr []int) []int {
    unique := []int{}

    for _, num := range arr {
        found := false
        for _, u := range unique {
            if u == num {
                found = true
                break
            }
        }
        if !found {
            unique = append(unique, num)
        }
    }

    return unique
}

func main() {
    arr := []int{1, 2, 3, 3, 4, 5, 5}
    unique := getUnique(arr)
    fmt.Println(unique) // Output: [1 2 3 4 5]
}
```

In this example, the `getUnique` function takes an array of integers as input and returns an array of unique integers. The function creates a new slice called `unique` and iterates over the input array using a for loop.

For each number in the input array, the function checks if it already exists in the `unique` slice using another for loop. If the number is not found, it is added to the `unique` slice using the `append` function.

Finally, the function returns the `unique` slice.

When we run this code, we get the output `[1 2 3 4 5]`, which contains the unique integers from the input array.