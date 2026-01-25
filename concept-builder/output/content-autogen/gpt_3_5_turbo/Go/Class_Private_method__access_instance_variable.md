In Go, private methods and variables are declared using lower-cased names. This makes them inaccessible from outside the package. However, if we want to access instance variables in private methods, we can make use of getter and setter methods. Here is an example:

```
package main

import (
    "fmt"
)

type Person struct {
    name string
    age  int
}

func (p *Person) SetName(name string) {
    p.name = name
}

func (p *Person) GetName() string {
    return p.name
}

func (p *Person) doSomething() {
    // Private method accessing instance variable
    fmt.Println("My name is", p.GetName())
}

func main() {
    person := Person{"John", 30}
    person.doSomething() // Output: My name is John
}
```

In the above example, we have a `Person` struct with `name` and `age` instance variables. We have defined getter and setter methods for the `name` variable, as they are private. The private method `doSomething` is able to access the `name` variable using the `GetName` method.

We can initialize and access the private method as shown in the `main` function. The output will be "My name is John".