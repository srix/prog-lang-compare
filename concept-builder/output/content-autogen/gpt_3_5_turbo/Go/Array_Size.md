In Go, the `len` function is used to get the length of an array. Here's an example:

```go
package main

import "fmt"

func main() {
    numbers := [5]int{1, 2, 3, 4, 5}
    
    length := len(numbers)
    fmt.Println("The length of the array is:", length)
}
```

Output:

```
The length of the array is: 5
```

In this example, we have declared an array called `numbers` with 5 elements and initialized its values. We have then used the `len` function to get the length of the array and stored it in the `length` variable. Finally, we have printed out the length of the array to the console.

Note that the `len` function also works with slices and maps in Go.