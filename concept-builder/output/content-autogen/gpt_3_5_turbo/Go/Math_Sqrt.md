In Go, the `math` package provides a `Sqrt` function that can be used to get the square root of a number. Here's an example code that demonstrates how to use the `math.Sqrt` function:

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    // Get the square root of a number
    x := 16.0
    y := math.Sqrt(x)
    fmt.Printf("The square root of %f is %f\n", x, y)
}
```

In this example, we first import the `math` package, which contains the `Sqrt` function. We then declare a variable `x` and assign it the value `16.0`. We then call the `math.Sqrt` function with `x` as an argument and assign the result to `y`.

Finally, we use the `fmt.Printf` function to print the result `y` along with the original number `x`.

The output of this program would be:

```
The square root of 16.000000 is 4.000000
```

This indicates that the square root of 16 is 4.