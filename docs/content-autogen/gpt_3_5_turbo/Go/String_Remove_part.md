In Go, you can remove a part of a string by using the `strings.Replace()` function or by using string slicing.

Here is an example of how to remove a specific part of the string using the `strings.Replace()` function:

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    str := "Hello World"
    newStr := strings.Replace(str, "World", "", -1)
    fmt.Println(newStr) // Output: "Hello "
}
```

In the above example, the `strings.Replace()` function is used to replace the substring "World" with an empty string. This removes the substring and returns the modified string.

Here is an example of how to use string slicing to remove a part of the string:

```go
package main

import "fmt"

func main() {
    str := "Hello World"
    newStr := str[:5] + str[10:]
    fmt.Println(newStr) // Output: "Hello"
}
```

In this example, we create a new string by concatenating the first 5 characters of the original string and the characters after the substring "World". This effectively removes the substring and returns the modified string.