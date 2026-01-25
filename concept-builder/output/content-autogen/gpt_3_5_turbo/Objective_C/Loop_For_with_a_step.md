In Objective-C, the `for` loop is a control statement that allows you to repeat a block of code a fixed number of times. The syntax of a for loop includes three main components: the initialization, the condition, and the increment/decrement.

Here's an example:

```
for (int i = 0; i < 10; i++) {
    NSLog(@"%d", i);
}
```

In this example, the loop will execute ten times. 

- The initialization statement sets the variable `i` to `0`.
- The condition statement (`i < 10`) is checked before each iteration of the loop. If it evaluates to true, the loop will execute again. If it evaluates to false, the loop will terminate. 
- The increment statement (`i++`) is executed at the end of each iteration of the loop.

Each time through the loop, the statement inside the curly braces (`NSLog(@"%d", i);`) will be executed, printing the value of `i` to the console.

You can also use a `step` value to control the increment or decrement of the loop variable. For example:

```
for (int i = 0; i < 15; i += 2) {
    NSLog(@"%d", i);
}
```

In this example, the loop will execute eight times, with `i` taking on the values 0, 2, 4, 6, 8, 10, 12, and 14. The `i += 2` statement increments `i` by 2 on each iteration of the loop, instead of the default increment of 1.