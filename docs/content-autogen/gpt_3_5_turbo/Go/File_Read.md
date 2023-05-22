In Go, we can read a file using the `os` and `bufio` packages. Here's an example of how to read a text file in Go:

```go
package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    // Open the file for reading
    file, err := os.Open("example.txt")
    if err != nil {
        fmt.Println("File reading error", err)
        return
    }
    defer file.Close()

    // Create a scanner to read the file line by line
    scanner := bufio.NewScanner(file)

    // Read each line of the file
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }

    // Check for any errors during scanning
    if scanner.Err() != nil {
        fmt.Println("File scanning error", scanner.Err())
    }
}
```

In this example, we are opening a file named `example.txt` using the `os.Open` function. This function returns a `file` object and an `error` if there was any issue opening the file.

We then create a `scanner` using the `bufio.NewScanner` function and pass in the `file` object. This allows us to read the file line by line using the `scanner.Scan()` method.

Finally, we loop through each line of the file and print it using `scanner.Text()`. We also check for any errors during scanning using `scanner.Err()`.