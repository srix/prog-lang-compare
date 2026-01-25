In Go, you can convert a string to an integer using the `strconv` package. Here's an example:

```
package main

import (
    "fmt"
    "strconv"
)

func main() {
    str := "123"
    num, err := strconv.Atoi(str)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("String:", str)
        fmt.Println("Integer:", num)
    }
}
```

In this example, we first declare a string variable `str` that contains the value "123". Then we use the `strconv.Atoi()` function to convert `str` to an integer variable called `num`. The `Atoi()` function returns two values: the converted integer and an error. We use a conditional statement to handle the case where an error occurs during the conversion process. If there are no errors, we print the original string and the converted integer using `fmt.Println()`.

Output:

```
String: 123
Integer: 123
```

You can also use `strconv.ParseInt()` function to convert a string to integer, which is more flexible as it allows you to specify the number base (e.g. binary, decimal, hexadecimal). Here's an example:

```
package main

import (
    "fmt"
    "strconv"
)

func main() {
    str := "1010"
    num, err := strconv.ParseInt(str, 2, 64)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("String:", str)
        fmt.Println("Integer:", num)
    }
}
```

In this example, we convert the string "1010" to an integer using `strconv.ParseInt()`, specifying that the number is in binary format (base 2) and that the result should be of type int64. The resulting integer variable `num` will contain the value 10 in decimal format.

Output:

```
String: 1010
Integer: 10
```