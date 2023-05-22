In Go, the `switch` statement can be used as an alternative to multiple `if` and `else if` statements. It is useful when you need to compare a single expression with multiple values.

Here is an example of how to use `switch` as `else if`:

```go
package main

import "fmt"

func main() {
    score := 70
    var grade string

    switch {
    case score >= 90:
        grade = "A"
    case score >= 80:
        grade = "B"
    case score >= 70:
        grade = "C"
    case score >= 60:
        grade = "D"
    default:
        grade = "F"
    }

    fmt.Println("Your grade is", grade)
}
```

In this example, we are using `switch` to compare the variable `score` with multiple values. The `case` statements evaluate the expressions and execute the statements below them if the expression is true. The `default` statement will execute if none of the `case` statements evaluate to true.

We use an empty expression in the `switch` statement because we are comparing a single variable to multiple values. This is equivalent to a series of `if` and `else if` statements.

You can customize the expression you want to compare inside the `switch` statement. Here's an example that takes a user input and compares it with a list of predefined options:

```go
package main

import "fmt"

func main() {
    var input string

    fmt.Print("Enter your favorite color: ")
    fmt.Scanln(&input)

    switch input {
    case "red":
        fmt.Println("Your favorite color is red.")
    case "green":
        fmt.Println("Your favorite color is green.")
    case "blue":
        fmt.Println("Your favorite color is blue.")
    default:
        fmt.Println("Your favorite color is not red, green, or blue.")
    }
}
```

In this example, we are customizing the expression inside `switch` to compare it with multiple possible user inputs. If the input matches one of the `case` statements, it will print the corresponding message. Otherwise, it will execute the `default` statement.