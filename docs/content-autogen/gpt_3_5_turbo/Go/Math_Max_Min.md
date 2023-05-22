In Go, we can simply use the `math` package to get the maximum or minimum of two numbers. Here is an example code:

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    a := 10
    b := 20

    // Maximum of a and b
    max := math.Max(float64(a), float64(b))
    fmt.Println("Maximum of a and b:", max)

    // Minimum of a and b
    min := math.Min(float64(a), float64(b))
    fmt.Println("Minimum of a and b:", min)
}
```

In the above example code, we have two integer variables `a` and `b`. We convert these variables into float64 using the `float64` function, which is required to use the `math.Max` and `math.Min` functions. We then use these functions to get the maximum and minimum of `a` and `b`. Finally, we print the results using the `fmt` package.

Output:

```
Maximum of a and b: 20
Minimum of a and b: 10
```

This code can be modified to accept user input for `a` and `b` for dynamic values. We can also use this code to get the maximum or minimum of more than two numbers by calling `math.Max` or `math.Min` multiple times.