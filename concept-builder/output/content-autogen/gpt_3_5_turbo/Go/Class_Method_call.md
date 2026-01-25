In Go, we call a method by using the dot notation followed by the method name. The dot notation is used to indicate the object or instance on which the method will be called. Here is an example:

```go
package main

import (
    "fmt"
)

type Circle struct {
    x, y, r float64
}

func (c Circle) area() float64 {
    return 3.14 * c.r * c.r
}

func main() {
    c := Circle{x: 0, y: 0, r: 5}
    fmt.Println("Circle area:", c.area())
}
```

In this example, we define a Circle struct and a method area() to calculate the area of a circle. The method area() is associated with the Circle type using the receiver syntax `func (c Circle) area()`. 

In the main function, we create a Circle object 'c' and call the area() method on it using the dot notation `c.area()`. The method call will calculate the area of the circle and return it, which is then printed to the console using the `fmt.Println()` function.