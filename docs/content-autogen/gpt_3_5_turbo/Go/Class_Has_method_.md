In Go, you can check if a class has a method by using the reflection package's `Type` and `MethodByName` functions. Here's an example:

```go
package main

import (
    "fmt"
    "reflect"
)

type Person struct {
    name string
    age  int
}

func (p Person) SayHello() {
    fmt.Println("Hello, my name is", p.name)
}

func (p Person) SayAge() {
    fmt.Println("I am", p.age, "years old")
}

func main() {
    p := Person{name: "John", age: 30}

    // check if the Person class has a method named "SayHello"
    method := reflect.ValueOf(p).MethodByName("SayHello")
    if method.IsValid() {
        fmt.Println("Person class has the method SayHello")
    } else {
        fmt.Println("Person class does not have the method SayHello")
    }

    // check if the Person class has a method named "SayGender"
    method = reflect.ValueOf(p).MethodByName("SayGender")
    if method.IsValid() {
        fmt.Println("Person class has the method SayGender")
    } else {
        fmt.Println("Person class does not have the method SayGender")
    }
}
```

In the above example, the `Person` class has two methods, `SayHello` and `SayAge`. We can use the `reflect` package to check if the `Person` class has these methods. In this case, we are checking if the class has the methods `SayHello` and `SayGender`. We get the method by calling the `MethodByName` function on the `reflect.ValueOf` the class instance.

We then check whether the returned method is valid, i.e., if the method exists or not. If the method exists on the class, `IsValid()` will return `true`, otherwise it returns `false`.

Output:

```
Person class has the method SayHello
Person class does not have the method SayGender
```

So, by using the `reflection` package in Go, you can check if a class has a method or not.