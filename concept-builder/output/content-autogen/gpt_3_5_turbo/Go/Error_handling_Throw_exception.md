In Go, throwing an exception means creating a new error object and returning it from the function that encounters the error. This is commonly done using the `error` interface type provided in the Go standard library.

Here is an example of how to throw an exception in Go using the `errors.New()` function:

```go
package main

import (
    "errors"
    "fmt"
)

func divideNumbers(x int, y int) (int, error) {
    if y == 0 {
        return 0, errors.New("cannot divide by zero")
    }

    return x / y, nil
}

func main() {
    result, err := divideNumbers(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```

In this example, the `divideNumbers()` function takes two integer parameters and returns the result of dividing them. If the second parameter is zero, it will create a new error object using the `errors.New()` function and return it along with the result.

In the `main()` function, we call `divideNumbers()` with the values `10` and `0`, which will cause an exception to be thrown. We check if `err` is not `nil` and print the error message accordingly.

Another way to throw an exception in Go is by using the `panic()` function, which causes the program to immediately stop and print a stack trace of where it occurred. However, this should only be used in extreme cases since it does not allow for graceful error handling.