In Go, we can convert an integer to a float by simply assigning the integer to a variable of the float type. Here's an example:

```
package main

import "fmt"

func main() {
    // Converting an integer to a float
    var x int = 10
    var y float64 = float64(x)
    fmt.Println(y)
}
```

In the example above, we first declare an integer variable `x` and assign it the value `10`. We then declare a float64 variable `y` and assign it the value of `x` after it has been converted to a float.

Alternatively, we can also use the `strconv` package to convert an integer to a float. Here's an example:

```
package main

import (
    "fmt"
    "strconv"
)

func main() {
    // Converting an integer to a float using strconv
    var x int = 20
    var y float64
    y, _ = strconv.ParseFloat(strconv.Itoa(x), 64)
    fmt.Println(y)
}
```

In this example, we first declare an integer variable `x` and assign it the value `20`. We then declare a float64 variable `y`. We use the `strconv.Itoa` function to convert the integer `x` to a string, then we use the `strconv.ParseFloat` function to convert the string to a float64, which we assign to `y`. The second argument to `strconv.ParseFloat` is the bit size (64 in this case), and the underscore before it is used to ignore any error returned by the function.