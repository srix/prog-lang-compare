In Go, you can use the `strconv` package to check if a string is a number. Specifically, you can use the `Atoi` function to try to convert the string to an integer. If the conversion is successful, then the string is a number. Here is an example:

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    str1 := "123"
    str2 := "hello"

    if _, err := strconv.Atoi(str1); err == nil {
        fmt.Println(str1, "is a number")
    } else {
        fmt.Println(str1, "is not a number")
    }

    if _, err := strconv.Atoi(str2); err == nil {
        fmt.Println(str2, "is a number")
    } else {
        fmt.Println(str2, "is not a number")
    }
}
```

In this example, we use the `strconv.Atoi` function to try to convert `str1` and `str2` to integers. We use the blank identifier (`_`) to discard the integer value that is returned since we only care about the error value. If the error is `nil`, then the string is a number and we print that message. Otherwise, we print a different message. 

When you run this program, the output will be:

```
123 is a number
hello is not a number
```

This tells us that `str1` is a number but `str2` is not.