In Go, you can return a value in a function or method using the `return` statement followed by the value you want to return. Here is an example of a function that takes an integer as an argument and returns its square:

```go
func square(x int) int {
    return x * x
}
```

In this example, `square` is a function that takes an integer `x` as an argument and returns the square of `x` as an integer. 

To call this function and get the square of a number, you can do:

```go
result := square(5)
fmt.Println(result) // Output: 25
```

In this example, the `square` function is called with an integer argument `5`, which returns the value `25`. This value is then assigned to the variable `result`, which is printed on screen using the `fmt.Println` function.

You can also return multiple values from a function or method in Go using the syntax:

```go
func someFunc(x int) (int, bool) {
    return x * x, x > 0
}
```

In this syntax, `someFunc` accepts an integer `x` as the input parameter and returns two values, an integer of the square of `x` and a boolean indicating if `x` is greater than 0. You can call this function like this:

```go
a, b := someFunc(5)
fmt.Println(a, b) // Output: 25 true
```

In this example, the `someFunc` function is called with an integer argument `5`, which returns two values, an integer of value `25` and a boolean value `true`. These values are assigned to variables `a` and `b`, which are then printed on screen using the `fmt.Println` function.