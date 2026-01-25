In Go, we can split a string into substrings based on a separator using the `strings.Split()` function. The syntax is as follows:

```
strings.Split(str, separator)
```

Here, `str` represents the string that we want to split and `separator` represents the character that we want to use as a delimiter. 

Let's take a few examples to understand this better:

Example 1: Splitting a string with whitespace

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    str := "Hello World"
    substrings := strings.Split(str, " ")
    fmt.Println(substrings)
}
```

Output:
```
[Hello World]
```

In this example, we have used a whitespace as the separator and split the string "Hello World" into two substrings "Hello" and "World".

Example 2: Splitting a string with a comma

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    str := "apple,banana,orange"
    substrings := strings.Split(str, ",")
    fmt.Println(substrings)
}
```

Output:
```
[apple banana orange]
```

In this example, we have used a comma as the separator and split the string "apple,banana,orange" into three substrings "apple", "banana" and "orange".

Example 3: Splitting a string with a custom separator

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    str := "April-May-June"
    substrings := strings.Split(str, "-")
    fmt.Println(substrings)
}
```

Output:
```
[April May June]
```

In this example, we have used a hyphen as the separator and split the string "April-May-June" into three substrings "April", "May" and "June".

I hope this helps you understand how to split a string in Go.