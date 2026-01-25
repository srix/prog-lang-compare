In Go, a function or method can be declared using the following syntax:

```
func function_name(arguments) return_type {
   // function body
}
```

Here's an example function that calculates the sum of two integers:

```go
func sum(x int, y int) int {
   return x + y
}
```

In this example, `sum` is the function name, `(x int, y int)` are the arguments, and `int` is the return type. The function body simply adds the two integers `x` and `y` and returns the sum.

Here's another example that shows how to declare a method:

```go
type Person struct {
   name string
}

func (p Person) introduce() {
   fmt.Printf("Hello, my name is %s\n", p.name)
}
```

In this example, `Person` is the struct type and `introduce` is a method that belongs to the `Person` type. The `p Person` is the receiver of the method, which allows you to access the fields and methods of the `Person` struct. The method simply prints out a message introducing the person by name.