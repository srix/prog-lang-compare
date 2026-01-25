In Go, the `reflect` package provides methods to get the type of an object. Here are some examples:

```
package main

import (
    "fmt"
    "reflect"
)

func main() {
    // Get the type of an int variable
    age := 25
    fmt.Println(reflect.TypeOf(age)) // prints "int"

    // Get the type of a string variable
    name := "John"
    fmt.Println(reflect.TypeOf(name)) // prints "string"

    // Get the type of a custom struct
    type Person struct {
        Name string
        Age int
    }
    p := Person{Name: "Alice", Age: 30}
    fmt.Println(reflect.TypeOf(p)) // prints "main.Person"
}
```

In the above example, the `reflect.TypeOf()` method is used to get the type of different kinds of objects: an `int` variable, a `string` variable, and a custom `Person` struct. The method returns a `reflect.Type` object, which can be printed to get a string representation of the type.