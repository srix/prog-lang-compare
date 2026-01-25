In Go, we can get the working directory using the `os` package. The `os` package provides a `Getwd()` function that returns the current working directory of the process as a string.

Here's an example code snippet that demonstrates how to get the working directory path in Go:

```
package main

import (
    "fmt"
    "os"
)

func main() {
    wd, err := os.Getwd()
    if err != nil {
        fmt.Println("Error getting working directory:", err)
    }
    fmt.Println("Working directory:", wd)
}
```

In the above example, we first import the `fmt` and `os` packages. We then call the `Getwd()` function which returns the working directory path as a string, and any error that occurred during the process. We assign the returned value to `wd` and print it out.

Note that since the working directory may change during the execution of a program, it's important to handle the error returned by `Getwd()` to ensure that the program doesn't crash in case of an error.