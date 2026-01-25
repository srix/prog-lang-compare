In PHP, the `for` loop is primarily used for executing a block of code for a specific number of times. 

The basic syntax of a `for` loop in PHP is as follows:

```
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

Here's what each part of the loop syntax does:

- `initialization` - runs once at the start of the loop and initializes a variable with a starting value
- `condition` - tested before each iteration of the loop and determines whether the loop should continue or stop
- `increment/decrement` - executed after each iteration of the loop and modifies the variable initialized in the first part of the loop

Here's an example of a `for` loop that prints the numbers 1 to 10:

```
for ($i = 1; $i <= 10; $i++) {
  echo $i . "<br>";
}
```

In this example, the `for` loop begins by initializing the variable `$i` to 1. The loop then checks the condition `$i <= 10` before each iteration and will continue to run as long as the condition is true. After each iteration, the increment operator `$i++` is executed, increasing the value of `$i` by 1.

As a result, this loop will execute 10 times and print the values 1 to 10 to the screen.