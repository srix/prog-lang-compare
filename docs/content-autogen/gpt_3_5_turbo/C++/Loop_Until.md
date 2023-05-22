In C++, the keyword `until` is not a valid keyword. Instead, the keyword `while` is used to repeatedly execute a block of code until a certain condition becomes false.

The syntax for using `while` loop is as follows:

```
while (condition) {
  // code block to be executed while the condition is true
}
```

Here's an example of how to use `while` loop to calculate the sum of numbers from 1 to 10:

```
int sum = 0;
int i = 1;

while (i <= 10) {
  sum += i;
  i++;
}
```

In this example, the `while` loop executes the code block as long as the condition `i <= 10` is true. The variable `i` starts with a value of 1 and increments by 1 in each iteration of the loop. The variable `sum` is used to accumulate the sum of the numbers from 1 to 10.

The loop terminates when the condition `i <= 10` becomes false, which occurs when `i` reaches a value of 11.

It's important to make sure that the condition used in the `while` loop eventually becomes false, or else the loop will continue executing indefinitely, resulting in an infinite loop.