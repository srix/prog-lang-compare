Closure is a powerful concept in Go that allows you to define a function inside another function and use variables from the outer function within the inner function.

Here is a basic example of closure in Go:

```go
func outerFunc() func() {
    count := 0 // variable to be used in inner function
    return func() {
        count++
        fmt.Println(count)
    }
}

func main() {
    innerFunc := outerFunc()

    innerFunc() // prints 1
    innerFunc() // prints 2
    innerFunc() // prints 3
}
```

In the example above, `outerFunc` returns another function that increments the `count` variable and then prints its value. The `main` function creates a closure of `outerFunc` and assigns the returned function to the variable `innerFunc`. When `innerFunc` is called, it uses the `count` variable from `outerFunc` and increments it with each call.

Another example of closure in Go is when you want to create a function with some pre-loaded data. Here's how to build that closure:

```go
func generateMessage(name string) func() string {
    return func() string {
        return "Hello " + name + "!"
    }
}

func main() {
    messageFunc := generateMessage("John")
    fmt.Println(messageFunc()) // prints "Hello John!"

    messageFunc = generateMessage("Jane")
    fmt.Println(messageFunc()) // prints "Hello Jane!"

}
```

In this example, the `generateMessage` function takes in a `name` parameter and returns another function that concatenates the `name` parameter with a greeting message. The closure allows you to reuse the returned function multiple times with different names.

Closure is a powerful concept that can be used in many scenarios. It can simplify your code and make it more readable.