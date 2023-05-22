In Go, you can check if an array includes an element using the `for` loop and the `range` keyword, or by using the built-in `contains` function in the `strings` package.

Here's an example using the `for` loop and `range` keyword:

```go
package main

import "fmt"

func main() {
    arr := []int{1, 2, 3, 4, 5}
    target := 3

    for _, item := range arr {
        if item == target {
            fmt.Printf("The array includes %d.\n", target)
            return
        }
    }

    fmt.Printf("The array does not include %d.\n", target)
}
```

In this example, we have an array `arr` containing the integers 1 through 5, and a variable `target` containing the value we want to check for. We iterate over the array using the `range` keyword and compare each item to `target`.

If we find a match, we print a message indicating that the array includes the target element. Otherwise, we print a message indicating that the array does not include the element.

Here's an example using the `contains` function in the `strings` package:

```go
package main

import "fmt"
import "strings"

func main() {
    arr := []string{"apple", "banana", "orange"}
    target := "banana"
    
    if strings.Contains(strings.Join(arr, ","), target) {
        fmt.Printf("The array includes %s.\n", target)
    } else {
        fmt.Printf("The array does not include %s.\n", target)
    }
}
```

In this example, we have an array `arr` containing strings of fruits, and a variable `target` containing the fruit we want to check for. We join the array into a single string using the `Join` function in the `strings` package, separating each element by a comma.

We then use the `Contains` function to check if the target string is present in the joined string. If it is, we print a message indicating that the array includes the target element. Otherwise, we print a message indicating that the array does not include the element.