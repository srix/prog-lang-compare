In Go, a static method is referred to as a "function" that is defined within a class. Here's an example of how to define a static method in Go:

```
package main

import "fmt"

type MyClass struct {
  value int
}

func (mc *MyClass) myMethod() {
  fmt.Println(mc.value)
}

func myStaticMethod() {
  fmt.Println("This is a static method")
}

func main() {
  mc := &MyClass{value: 42}
  mc.myMethod() // calling the non-static method on the instance of MyClass

  myStaticMethod() // calling the static method directly from the package
}
```

In this example, we have defined a class called `MyClass` which has a single instance method called `myMethod()` that prints a value to the console. Additionally, we have defined a separate function called `myStaticMethod()` that is not attached to any specific instance of `MyClass`.

To call a non-static method in Go, we first need to create an instance of the class and then call the method on that instance. In the `main()` function, we create an instance of `MyClass` and call the `myMethod()` method on it.

To call a static method in Go, we simply call it directly from the package. In this example, we call `myStaticMethod()` directly from the `main()` function.