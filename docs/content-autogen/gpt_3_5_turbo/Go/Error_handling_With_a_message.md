In Go, try/catch/finally is implemented differently than in some other languages such as Java. Instead, Go has the `defer`, `panic`, and `recover` statements that are used together to create similar functionality.

To use these statements with a message to handle errors in Go, first use `defer` to create a function that will be run at the end of the current function, regardless of whether or not an error has occurred. This function should have a `recover` statement inside it to catch any panics and handle them appropriately.

Below is an example of how to handle errors with a message using these statements in Go:

```
func divide(x, y int) (result int, err error) {
	defer func() {
		if r := recover(); r != nil {
			err = fmt.Errorf("runtime error: %v", r)
		}
	}()
	
	if y == 0 {
		panic("cannot divide by zero")
	}
	
	result = x / y
	return result, nil
}
```

In the example above, the `divide` function takes two integers `x` and `y` as parameters and returns the result of dividing `x` by `y`. If `y` is equal to 0, a panic is triggered with the message "cannot divide by zero". The `defer` statement defines an anonymous function that checks for a `panic` and sets the `err` variable to an error message if one occurs.

To use this function, you would call it like this:

```
result, err := divide(10, 0)
if err != nil {
	fmt.Println(err)
} else {
	fmt.Println(result)
}
```

In this call, `y` is set to 0, which causes a panic. The `defer` function catches the panic and sets the `err` variable to an error message. The message "cannot divide by zero" is then printed. If `y` had been any other value, the result of the division would be printed instead of an error message.

By using `defer`, `panic`, and `recover` in Go, you can create similar functionality to try/catch/finally in other languages, allowing you to handle errors with more specific messages.