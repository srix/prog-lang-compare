In Go, private methods can be defined and used within the same package. Private methods are not accessible outside of the package where they are defined. Here is an example of how to define and use a private method in Go:

```
package main

import (
    "fmt"
)

type Person struct {
    Name string
    Age  int
}

func (p *Person) sayHello() {
    fmt.Println("Hello, my name is", p.Name)
}

func main() {
    person := Person{Name: "John", Age: 30}

    // Accessing private method sayHello()
    person.sayHello()
}
```

In this example, we define a `Person` struct with a private method `sayHello()`. The `sayHello()` method is accessible only within the `main` package. Inside the `main()` function, we create a new `Person` instance and call the `sayHello()` method using the `.` notation. This will print out the message: `Hello, my name is John`. Notice that if we try to call the `sayHello()` method outside of the `main` package, we'll receive a compile-time error. 

Note: In Go, private methods are denoted using lowercase characters at the beginning of the method name, such as `sayHello()` in this example.