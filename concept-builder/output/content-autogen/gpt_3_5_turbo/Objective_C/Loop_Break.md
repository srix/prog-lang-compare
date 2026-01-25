In Objective-C, `break` is a control statement used in loops to terminate the loop and transfer control to the statement immediately following the loop. The `break` statement can be used with all loop types – `for`, `while`, and `do-while`.

Here's an example that shows how to use `break` in a `for` loop:

```objective-c
for (int i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  NSLog(@"%d", i);
}
```
Output:
```
0
1
2
3
4
```
In this example, the `for` loop increments the value of `i` by 1 each time the loop executes. The `if` statement checks if `i` is equal to 5. If `i` is equal to 5, the `break` statement is executed. This terminates the `for` loop and control is transferred to the statement immediately following the loop.

Here's another example that shows how to use `break` in a `while` loop:

```objective-c
int i = 0;
while (i < 10) {
  if (i == 5) {
    break;
  }
  NSLog(@"%d", i);
  i++;
}
```
Output:
```
0
1
2
3
4
```
In this example, the `while` loop increments the value of `i` by 1 each time the loop executes. The `if` statement checks if `i` is equal to 5. If `i` is equal to 5, the `break` statement is executed. This terminates the `while` loop and control is transferred to the statement immediately following the loop.

In both examples, the `break` statement is used to terminate the loop prematurely, avoiding unnecessary iterations when a certain condition is met.