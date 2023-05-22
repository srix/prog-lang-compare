Sure! In R, the `until` loop allows you to repeat a set of statements until a certain condition is met. Here's the general structure:

```
repeat {
  # statements to execute
  if (condition) {
    break
  }
}
```

The statements inside the `repeat` loop will be executed indefinitely until the condition in the `if` statement is met. Once the condition is met, the `break` statement is executed to exit the loop.

Here's a simple example to illustrate how to use the `until` loop in R:

```
i <- 1
repeat {
  print(i)
  i <- i + 1
  if (i > 10) {
    break
  }
}
```

This code will print the numbers 1 through 10 to the console, because the loop will continue until `i` is greater than 10.

I hope that helps! If you have any further questions, feel free to ask.