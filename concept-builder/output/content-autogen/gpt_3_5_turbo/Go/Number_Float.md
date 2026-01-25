In Go, float numbers are used to represent decimal or fractional numbers. Go supports two float data types: float32 and float64.

Here are some examples of how to use float numbers in Go:

Example 1: Declaring a float32 variable named "num1" and assigning a value to it.

```go
var num1 float32 = 3.14159
fmt.Println(num1)
```

Output: `3.14159`

Example 2: Declaring a float64 variable named "num2" and assigning a value to it.

```go
var num2 float64 = 2.71828
fmt.Println(num2)
```

Output: `2.71828`

Example 3: Calculating the area of a circle with radius 2.5 using float64 data type.

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    var radius float64 = 2.5 // declare and assign a float64 value to radius
    var area float64 = math.Pi * radius * radius // calculate the area of the circle
    fmt.Printf("The area of the circle is %.2f\n", area) // print the area with 2 decimal places
}
```

Output: `The area of the circle is 19.63`

In Go, it is important to use the appropriate float data type depending on the level of precision required. For most cases, float64 would suffice.