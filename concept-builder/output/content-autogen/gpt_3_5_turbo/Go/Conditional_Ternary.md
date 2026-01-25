In Go, ternary operations are commonly used for assigning a value based on a condition. A ternary operation comprises of three operands, hence the name ternary.

The syntax for a ternary operation in Go is:

```
condition ? value1 : value2
```

If the 'condition' is true, then the 'value1' is returned, else the 'value2' is returned.

Here's an example of how to use a ternary operation in Go:

```
package main

import "fmt"

func main() {
    x := 10
    y := 20

    // ternary operation to find the minimum value
    min := func(a, b int) int {
        if a < b {
            return a
        } else {
            return b
        }
    }(x, y)

    fmt.Printf("The minimum value between %d and %d is %d", x, y, min)
}
```

In this example, we use a conditional operator to determine the minimum value between two integers- x and y. The 'min' variable is assigned the value of 'a' if 'a' is less than 'b', otherwise it is assigned the value of 'b'.

The output of the above code will be:

```
The minimum value between 10 and 20 is 10
```