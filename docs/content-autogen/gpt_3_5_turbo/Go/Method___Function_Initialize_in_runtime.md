In Go, we can initialize a method or function at runtime by creating a function value and assigning it to a variable. This allows us to define the behavior of the function or method dynamically during runtime. Here are some examples:

Example 1 - Initializing a Function:

```go
package main

import "fmt"

func main() {
    add := func(x, y int) int {
        return x + y
    }

    result := add(2, 3)
    fmt.Println(result)
}
```

In this example, we create a function value `add` that takes two integers as input parameters and returns the sum of the two integers. We then assign this function value to a variable within the `main` function. Finally, we call the `add` function with the arguments `2` and `3`, and print the result `5` to the console.

Example 2 - Initializing a Method:

```go
package main

import "fmt"

type Person struct {
    name string
    age  int
}

func (p *Person) printName() {
    fmt.Println(p.name)
}

func main() {
   person := Person{name: "Alice", age: 23}
   fn := person.printName
   fn() 
}
```

In this example, we define a `Person` struct and a method `printName` that prints the name of the person to the console. We then create a `person` variable and initialize the `fn` variable with the `person.printName` method. Finally, we call `fn()` which executes the `printName` method on the `person` instance and prints the name "Alice" to the console.

These examples demonstrate how we can use function values to initialize a method or function at runtime in Go. This approach allows us to create more flexible and dynamic programs.