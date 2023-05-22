In Go, we can use the `strings` package to remove leading and trailing whitespaces from a string.

To remove leading whitespaces, we can use the `strings.TrimLeft()` function, which takes two arguments: the string to be trimmed and a string of the characters to be removed. The following example demonstrates this:

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    str := "   remove leading whitespaces"
    trimmed := strings.TrimLeft(str, " ")
    fmt.Println(trimmed)
}
```

Output:
```
remove leading whitespaces
```

Similarly, we can remove trailing whitespaces using the `strings.TrimRight()` function, which takes the same arguments as `TrimLeft()`. For example:

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    str := "remove trailing whitespaces   "
    trimmed := strings.TrimRight(str, " ")
    fmt.Println(trimmed)
}
```

Output:
```
remove trailing whitespaces
```

Finally, we can remove both leading and trailing whitespaces using the `strings.TrimSpace()` function, which takes one argument: the string to be trimmed. For example:

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    str := "  remove both leading and trailing whitespaces   "
    trimmed := strings.TrimSpace(str)
    fmt.Println(trimmed)
}
```

Output:
```
remove both leading and trailing whitespaces
```