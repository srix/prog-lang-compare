In Go, a constant list is declared using the `const` keyword and can contain a fixed sequence or array of constant values. Here is an example:

```go
package main

import "fmt"

func main() {
    const (
        a = 1
        b = 2
        c = 3
    )
    
    fmt.Println(a, b, c)  // Output: 1 2 3
}
```

In the above example, we have declared a constant list with 3 values `a`, `b`, and `c`, which are assigned the constant values `1`, `2`, and `3`, respectively. These constants can be used within the program and their values cannot be changed throughout the program execution.

We can also declare a constant list with iota, which is a pre-declared identifier that can be used to generate a sequence of consecutive integer values. Here is an example:

```go
package main

import "fmt"

const (
    Monday = iota + 1
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
    Sunday
)

func main() {
    fmt.Println("Days of the week:")
    fmt.Println("Monday:", Monday)
    fmt.Println("Tuesday:", Tuesday)
    fmt.Println("Wednesday:", Wednesday)
    fmt.Println("Thursday:", Thursday)
    fmt.Println("Friday:", Friday)
    fmt.Println("Saturday:", Saturday)
    fmt.Println("Sunday:", Sunday)
}
```

In the above example, we have declared a constant list with 7 values representing the days of the week. We have used the `iota` identifier to generate a sequence of consecutive integer values, starting from `1`, which are assigned to each constant. The output will be:

```
Days of the week:
Monday: 1
Tuesday: 2
Wednesday: 3
Thursday: 4
Friday: 5
Saturday: 6
Sunday: 7
```