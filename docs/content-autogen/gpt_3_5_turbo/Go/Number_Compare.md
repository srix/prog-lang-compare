In Go, we can compare numbers using relational operators. Go supports the following relational operators:

* `<` (less than)
* `>` (greater than)
* `<=` (less than or equal to)
* `>=` (greater than or equal to)
* `==` (equal to)
* `!=` (not equal to)

Here are a few examples of how to compare numbers in Go:

```go
package main

import "fmt"

func main() {
    var a, b int

    // assigning values to variables
    a = 10
    b = 20

    // compare a and b
    if a < b {
        fmt.Printf("%d is less than %d\n", a, b)
    }

    if a > b {
        fmt.Printf("%d is greater than %d\n", a, b)
    }

    if a <= b {
        fmt.Printf("%d is less than or equal to %d\n", a, b)
    }

    if a >= b {
        fmt.Printf("%d is greater than or equal to %d\n", a, b)
    }

    if a == b {
        fmt.Printf("%d is equal to %d\n", a, b)
    }

    if a != b {
        fmt.Printf("%d is not equal to %d\n", a, b)
    }
}
```

Output:

```
10 is less than 20
10 is not equal to 20
10 is less than or equal to 20
```