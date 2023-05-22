In Go, you can replace a substring within a string using the `strings.Replace()` function. This function takes four arguments - the original string, the old substring to be replaced, the new substring to replace the old substring, and the number of replacements to be made (use -1 for all occurrences).

Here's an example code snippet:

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    originalString := "I love pizza and pizza is awesome"
    newString := strings.Replace(originalString, "pizza", "ice cream", -1)
    fmt.Println("Original string:", originalString)
    fmt.Println("New string:", newString)
}
```

This will output:

```
Original string: I love pizza and pizza is awesome
New string: I love ice cream and ice cream is awesome
```

In this example, we replace the substring "pizza" with "ice cream" in the original string using the `strings.Replace()` function. The `-1` argument tells the function to replace all occurrences of "pizza". The new string is stored in a variable called `newString`, which is then printed to the console.