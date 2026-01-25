In Go, you can get the parent directory path using the `path.Dir()` function provided by the `path` package. This function takes a file path as input and returns the directory path of the file. Here's an example:

```go
package main

import (
    "fmt"
    "path"
)

func main() {
    filePath := "/home/user/documents/sample.txt"
    parentDirPath := path.Dir(filePath)
    fmt.Println("Parent directory path:", parentDirPath)
}
```

In this example, we have defined a file path using the `filePath` variable. We then use the `path.Dir()` function to extract the parent directory path from this file path and store it in the `parentDirPath` variable. We then print out the parent directory path using `fmt.Println()`.

When you run this program, you should see the following output:

```
Parent directory path: /home/user/documents
```

This shows that `path.Dir()` has correctly identified the parent directory of the file path provided.