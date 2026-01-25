In Go, the `until` keyword is equivalent to the `for` loop with a negated condition. You can use this keyword to execute a certain block of code until a condition is met.

Here is the general syntax of the `until` loop:

```
until condition {
    // Code to execute
}
```

The loop will continue to execute until the condition is true. Once the condition is true, the loop will terminate.

Here is an example of using the `until` loop in Go to print numbers from 1 to 5:

```
i := 1
until i > 5 {
    fmt.Println(i)
    i++
}
```

This code will output the following:

```
1
2
3
4
5
```

The `until` loop is particularly useful when you want to run a loop until a certain condition is met, but you don't know in advance how many iterations will be required.