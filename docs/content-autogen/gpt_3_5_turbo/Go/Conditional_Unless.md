In Go programming language, `unless` is not a built-in keyword. However, you can achieve the same functionality using the `if` statement with a negated condition.

The following code shows an example of using `unless` in Go:

```
num := 10
unless num == 5 {
    fmt.Println("num is not 5")
}
```

The above code can be converted to use an `if` statement with a negated condition as shown below:

```
num := 10
if !(num == 5) {
    fmt.Println("num is not 5")
}
```

In this example, the `if` statement checks if the condition `!(num == 5)` is true, and if it is, then it proceeds to execute the code in the block. This is equivalent to an `unless` statement, as it executes the code block only if the condition is false.