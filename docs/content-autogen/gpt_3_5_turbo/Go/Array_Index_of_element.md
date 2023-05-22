In Go, we can find the index of a specific element in an array using a for loop and the `range` keyword. Here is an example:

```
package main

import "fmt"

func main() {
    // declaring an array
    arr := [5]int{10,20,30,40,50}

    // finding the index of 30
    for index, value := range arr {
        if value == 30 {
            fmt.Printf("Index of 30 is: %d\n", index)
        }
    }
}
```

In this example, we have an array `arr` with 5 integer elements. We are then using a for loop and the `range` keyword to iterate over the elements of the array. Inside the for loop, we are checking if the current element (`value`) is equal to 30. If it is, we print out the index of that element using `fmt.Printf` function.

Output: 
```
Index of 30 is: 2
```

This is because the index of 30 in the array is 2 (since array indexing starts at 0).