In Go, libraries are referred to as packages. Packages are the collection of related Go files that are grouped together in a directory.

To import a package, we use the `import` keyword followed by the name of the package. Here are a few examples:

```
import "fmt"
import "math/rand"
import "encoding/json"
```

We can also import multiple packages in a single import block:

```
import (
    "fmt"
    "math/rand"
    "encoding/json"
)
```

Imported packages are then used by using their name followed by a period, and then the name of the function or variable we want to use.

For example, the `fmt` package provides a function called `Println()` that can be used to print output to the console. Here's an example of how to use it:

```
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

The `rand` package provides a function called `Intn()` that generates a random integer between 0 and the provided number (exclusive). Here's an example of how to use it:

```
package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println(rand.Intn(100))
}
```

The `encoding/json` package provides functions for encoding and decoding JSON. Here's an example of how to use it to decode a JSON string:

```
package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string
    Age  int
}

func main() {
    jsonStr := `{"name": "John", "age": 30}`
    bytes := []byte(jsonStr)

    var person Person
    err := json.Unmarshal(bytes, &person)
    if err != nil {
        fmt.Println(err)
    }

    fmt.Printf("%v\n", person)
}
```