In Go, you can write to a file using the built-in `os` package. Here's an example of how to create a file and write to it:

```go
package main

import (
    "fmt"
    "os"
)

func main() {
    file, err := os.Create("example.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer file.Close()

    _, err = file.WriteString("Hello, world!")
    if err != nil {
        fmt.Println(err)
        return
    }
}
```

In this example, we create a file named "example.txt" using the `os.Create` function. The `if err != nil` check ensures that the file was created successfully.

Next, we defer the closing of the file to ensure that it is properly closed once we've finished writing to it.

Finally, we use the `file.WriteString` function to write the string "Hello, world!" to the file. The `_` variable acts as a placeholder for the number of bytes written, and we check for any errors with `if err != nil`. 

Once you run this code, if there are no errors, you should see a new file in your current directory named "example.txt" with the contents "Hello, world!".