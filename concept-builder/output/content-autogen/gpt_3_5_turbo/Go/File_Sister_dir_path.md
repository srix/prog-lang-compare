In Go, we can get the path of the directory of the current file using the `path/filepath` package. We can use the `filepath.Dir()` function to get the directory path of the current file, and then use the `filepath.Join()` function to concatenate the directory path with the name of the sister directory.

Here is an example:

```go
package main

import (
    "fmt"
    "path/filepath"
)

func main() {
    // get current file path
    currentFilePath, _ := filepath.Abs("./example.go")

    // get current file directory path
    currentDirPath := filepath.Dir(currentFilePath)

    // get sister directory path
    sisterDirPath := filepath.Join(currentDirPath, "sister")

    fmt.Println(sisterDirPath)
}
```

In this example, we first get the absolute path of the current file using `filepath.Abs()`. Then, we use `filepath.Dir()` to get the directory path of the current file. Finally, we use `filepath.Join()` to concatenate the directory path with the name of the sister directory ("sister" in this case) to get the full path of the sister directory.