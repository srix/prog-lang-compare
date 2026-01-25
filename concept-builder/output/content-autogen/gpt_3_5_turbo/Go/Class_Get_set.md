In Go, we use `get` and `set` methods to read or modify the value of private fields in a class. 

Here's an example code:

```
package main

import (
    "fmt"
)

type Person struct {
    name string
    age int
}

func (p *Person) GetName() string {
    return p.name
}

func (p *Person) SetName(name string) {
    p.name = name
}

func main() {
    p := Person{name: "Alice", age: 25}
    fmt.Println(p.GetName())
    p.SetName("Bob")
    fmt.Println(p.GetName())
}
```

In this example, we define a `Person` struct with two private fields, `name` and `age`. We then define two `get` and `set` methods for the `name` field:
- `GetName()` returns the value of `name`
- `SetName(name string)` assigns the value passed in to `name`

In the `main` function, we create a person object named `p` with the name "Alice" and age 25. We then use the `GetName()` method to print the person's name and `SetName()` to change the person's name to "Bob". Finally, we use the `GetName()` method again to print the updated name.

This allows us to enforce encapsulation in our class, ensuring that private fields can only be read or modified via our defined `get` and `set` methods.