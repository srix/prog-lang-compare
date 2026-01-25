In Go, you can get the current directory's path using the `os` package. Here's an example to get the current working directory:

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    dir, err := os.Getwd()
    if err != nil {
        panic(err)
    }
    fmt.Println("Directory:", dir)
}
```

The `os.Getwd()` function returns a string value which represents the current working directory. If there is any error fetching the working directory, it will return an error object. In the above code snippet, we are first fetching the current working directory using `os.Getwd()`, storing it in a variable named `dir`, and then printing it using `fmt.Println()`.

Another way to get the directory path is to pass a relative or absolute path to `os.Open()`. Here's an example:

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    dir, err := os.Open(".")
    if err != nil {
        panic(err)
    }
    defer dir.Close()

    fileInfo, err := dir.Stat()
    if err != nil {
        panic(err)
    }

    fmt.Println("Directory:", fileInfo.Name())
}
```

In the above code snippet, we are using `os.Open()` to open the current working directory by passing `.` as an argument. We are then closing the directory handle using `defer`, and fetching the directory information using `dir.Stat()`. Finally, we are printing the directory name from the `fileInfo` variable using `fmt.Println()`.