In Go, the `try/catch/finally` is implemented using the `defer`, `panic`, and `recover` keywords. The `defer` keyword is used to defer the execution of a function call until the surrounding function completes its execution. The `panic` keyword is used to cause a run-time panic, and the `recover` keyword is used to recover from a panic and resume normal execution. 

Here is an example of how to use `try/catch/finally` in Go:

```
func divideByZero() {
    defer func() {
        if err := recover(); err != nil {
            fmt.Println("Error: ", err)
        }
    }()
    a := 10
    b := 0
    if b == 0 {
        panic("division by zero")
    } else {
        c := a / b
        fmt.Println("Result: ", c)
    }
}
```

In the above example, the `divideByZero` function divides a number by zero, which results in a run-time panic. We use the `defer` keyword to call a function that will recover from the panic, and then we use the `panic` keyword to cause the panic. The `if err := recover(); err != nil` statement checks if a panic occurred and if so, it prints out the error message. 

Overall, try/catch/finally in Go can be used to handle exceptional cases in code that require special attention in order for the code to continue running as intended without crashing.