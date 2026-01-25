To count the number of elements in an array that match a given condition in Go, you can use a loop to iterate through the array and check each element against the condition. You can use a counter variable to keep track of the number of matches, incrementing it each time you find a match.

Here is an example code snippet that counts the number of elements in an array that are greater than 10:
```
package main

import "fmt"

func main() {
    arr := []int{5, 10, 15, 20, 25}
    count := 0

    for i := 0; i < len(arr); i++ {
        if arr[i] > 10 {
            count++
        }
    }

    fmt.Printf("Number of elements greater than 10: %d\n", count)
}
```

In this example, we initialize an array `arr` with different integers. We then initialize a variable `count` to `0` to keep track of the number of elements that match the condition. We then use a `for` loop with an `if` condition to count the number of elements greater than 10. Finally, we print out the count of elements that match the condition.

You can modify this example to match your specific condition.