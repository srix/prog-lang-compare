The `for` loop is a very popular loop structure used in PHP and many other programming languages. It allows you to iterate over a block of code a certain number of times based on a specified condition. A for loop has three separate expressions inside its parentheses separated by semicolons:

```
for (init; condition; step) { 
    // code to be executed
}
```

1. `init`: The initialization expression is executed only once at the beginning of the loop. It is typically used to initialize the loop counter to a starting value.

2. `condition:` The condition expression is evaluated at the beginning of each loop iteration. If the condition is true, the loop executes; if it is false, the loop terminates.

3. `step:` The statement in the step expression is executed at the end of each iteration, before the condition is evaluated again. It is typically used to update the loop counter.

Here is an example of how to use a for loop with a step in PHP:
```php
// counting from 1 to 10 with a step of 2
for ($i = 1; $i <= 10; $i += 2) {
    echo $i . " ";
}
// Output: 1 3 5 7 9
```
In this example, the loop starts with `$i` set to 1. The loop runs as long as `$i` is less than or equal to 10. On each iteration, `$i` is incremented by 2, and the value of `$i` is printed to the screen. The output of this loop would be the numbers 1, 3, 5, 7 and 9.