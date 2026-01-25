In Go, you can get the file path using the `filepath` package which provides platform-independent file path manipulation. The `Join()` function of the `filepath` package is used to construct paths, and the `Abs()` function is used to get the absolute path of a file.

Here is an example of how to get the file path:

```go
package main

import (
    "fmt"
    "path/filepath"
)

func main() {
    // Constructing a path using Join function
    path := filepath.Join("directory", "filename.txt")
    fmt.Println("File path is:", path)

    // Getting the absolute path of the file
    fullPath, err := filepath.Abs(path)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println("Absolute file path is:", fullPath)
}
```

In this example, we have used the `Join()` function of `filepath` package to construct the file path and pass two parameters: the directory name and the file name. Then we have used the `Abs()` function of the same package to get the absolute file path.

Note that the `Abs()` function returns an error in the case of a bad path, so you should always check for errors when using this function.