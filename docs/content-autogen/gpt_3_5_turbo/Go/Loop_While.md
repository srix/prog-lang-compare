In Go, a `while` keyword is not available, but it can be imitated using a `for` loop that has some conditions. The basic syntax for a `while` loop in Go is:

```go
for condition {
    // code to execute while the condition is true
}
```

Here's an example of how can you use `while` loop in Go:

```go
package main

import "fmt"

func main() {
    num := 1
    for num <= 5 {
        fmt.Println(num)
        num++
    }
}
```

This code will prints values 1, 2, 3, 4 and 5 on the console. The `num <= 5` is the condition of the loop, and it is evaluated before each iteration.

Another example, in this example we will take the input from the user and run the loop until the user inputs `-1`:

```go
package main

import "fmt"

func main() {
    var userInput int
    for userInput != -1 {
        fmt.Print("Enter a number (-1 to exit): ")
        fmt.Scan(&userInput)
        fmt.Println("You entered:", userInput)
    }
    fmt.Println("Exited while loop!")
}
```

This code will keep asking the user for input until they type in `-1`. The expression `userInput != -1` is evaluated before each iteration to determine whether the loop should continue or not.

Note that if you want an infinite loop, you can replace the condition with `true`. For example:

```go
package main

import "fmt"

func main() {
    i := 1
    for true {
        fmt.Println(i)
        i++
    }
}
```

This code will print out an infinite sequence of numbers starting from 1.