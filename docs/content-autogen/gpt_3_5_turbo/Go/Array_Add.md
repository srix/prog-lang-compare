Sure, to add an element to an array in Go, we can follow the below steps:

1. Initialize an array with a fixed size
2. Create a new variable with the value to be added
3. Assign the new variable value to a specific index in the array

Here is an example:

```
package main

import "fmt"

func main() {
    // Initialize an array with a fixed size
    var arr [3]string
    arr[0] = "apple"
    arr[1] = "banana"
    arr[2] = "orange"

    // Create a new variable with the value to be added
    newFruit := "grapes"

    // Assign the new variable value to a specific index in the array
    arr[3] = newFruit

    fmt.Println(arr) // Output: [apple banana orange grapes]
}
```

Note that we cannot add an element to an array beyond its length. If we try to add an element like we did in the above example, we will get a runtime error: "panic: runtime error: index out of range". Instead, if we want to add elements dynamically, we should use slices in Go.