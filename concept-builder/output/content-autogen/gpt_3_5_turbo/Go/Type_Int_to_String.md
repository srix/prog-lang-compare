In Go, we can convert an integer to a string using the `strconv.Itoa()` function.

Here's an example:

```
package main

import (
    "fmt"
    "strconv"
)

func main() {
    num := 123
    str := strconv.Itoa(num)
    fmt.Printf("Integer: %d, String: %s\n", num, str)
}
```

In this example, we declare an integer variable `num` with a value of 123. We then use the `strconv.Itoa()` function to convert `num` to a string and assign it to the variable `str`. Finally, we print the values of both `num` and `str` using the `%d` and `%s` format specifiers.

Output:
```
Integer: 123, String: 123
```

Note that the resulting string is just a representation of the integer value as a string, and not a concatenation of the integer with any other characters.