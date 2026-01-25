In Go, we can set default values for arguments in a function by using the assignment operator `=` within the method signature. Here's an example: 

```go
func sayHello(name string, greeting string = "Hello") {
    fmt.Println(greeting, name)
}

func main() {
    sayHello("John") // Output: Hello John
    sayHello("Jane", "Hi") // Output: Hi Jane
}
```

In the `sayHello` function, the second parameter `greeting` is set to `"Hello"` by default using the assignment operator. When calling the function, we can omit the second parameter, and the default value will be used. However, if we want to specify a custom greeting, we can pass it as an argument when calling the function, as shown in the second example.