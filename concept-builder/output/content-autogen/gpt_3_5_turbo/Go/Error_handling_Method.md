In Go, try/catch/finally is not available as a built-in feature. Instead, Go uses the built-in `error` type to handle errors and has a `defer` statement to handle clean-up actions. 
Here's an example usage of `defer` statement in Go:

```
func divide(num1, num2 float64) (result float64, err error) {
    defer func() {
        if recover() != nil {
            err = fmt.Errorf("division by zero")
        }
    }()

    if num2 == 0 {
        panic("division by zero")
    }

    result = num1 / num2
    return result, nil
}
```

In the above example, the function `divide` divides `num1` by `num2` and returns the result as well as any error that occurs. The `defer` statement is used to check whether a panic occurred (indicating a division by zero) and set the error message accordingly.

Here's another example of how to use `error` to handle an error:

```
func readFile(filepath string) (content string, err error) {
    file, err := os.Open(filepath)
    if err != nil {
        return "", fmt.Errorf("failed to open file: %s", err)
    }
    defer file.Close()

    buf := make([]byte, 1024)
    for {
        n, err := file.Read(buf)
        if err != nil && err != io.EOF {
            return "", fmt.Errorf("erro while reading file: %s", err)
        }
        if n == 0 {
            break
        }
        content += string(buf[:n])
    }

    return content, nil
}
```

In this example, the function `readFile` reads the content of the file at the given `filepath` and returns it as a string as well as any error that occurs. `os.Open` returns an error if the file cannot be opened, which is handled by returning an error message. The `defer` statement is used to close the file when the function finishes executing, ensuring that any resources used by the file are cleaned up.