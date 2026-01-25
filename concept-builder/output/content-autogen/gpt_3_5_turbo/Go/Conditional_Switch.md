In Go, a switch statement provides an easy and efficient way to handle multiple cases in a program. It evaluates an expression and executes the case that corresponds to the expression's value.

Here’s an example of a basic switch statement: 

```go
switch weekday {
    case "Monday":
        fmt.Println("Today is Monday!")
    case "Tuesday", "Wednesday", "Thursday":
        fmt.Println("It's a weekday, but not Monday!")
    case "Friday":
        fmt.Println("TGIF!")
    case "Saturday", "Sunday":
        fmt.Println("It's the weekend! Enjoy it!")
    default:
        fmt.Println("Invalid day of the week.")
}
```

In this example, the weekday variable would be evaluated by the switch statement. If it matches one of the cases, then the corresponding code block would be executed. If it doesn’t match any of the cases, then the code block in the `default` fallback case would be executed.

Notice that you can have multiple values for a single case separated by commas, as shown in the `Tuesday`, `Wednesday`, and `Thursday` case. You can also have a default case as the last case, which will be executed if none of the other cases match.

You can also use the switch statement to evaluate an expression instead of just a variable, as shown in this example:

```go
switch httpCode / 100 {
    case 2:
        fmt.Println("Success!")
    case 3:
        fmt.Println("Redirection.")
    case 4:
        fmt.Println("Client error.")
    case 5:
        fmt.Println("Server error.")
    default:
        fmt.Println("Unexpected error code.")
}
```

This switch statement evaluates an expression `httpCode / 100`, and each case expression tests a different range of possible values. The default case will be executed when the value of the expression does not match any of the cases.

Overall, switch statements provide a convenient way to handle multiple cases in a Go program. It can help you simplify code, and avoid writing lengthy if-else statements.