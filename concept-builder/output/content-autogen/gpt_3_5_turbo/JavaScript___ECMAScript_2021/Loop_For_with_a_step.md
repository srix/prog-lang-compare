In JavaScript, the `for` loop is used to execute a block of code repeatedly. The `for` loop consists of three expressions: initialization, condition, and iteration, separated by semicolons. One of the ways to use `for` loop is with a step, which allows you to increment the loop variable by a specified amount on each iteration.

Here is the syntax for using the `for` loop with a step in JavaScript:

```
for (initialization; condition; increment/decrement by step) {
   // code to be executed
}
```

The `initialization` expression is executed only once at the start of the loop. It initializes the loop variable to a desired value.

The `condition` expression is evaluated at the beginning of each iteration. If it is true, the loop continues. If it is false, the loop terminates.

The `step` is the amount by which the loop variable is incremented or decremented on each iteration.

Here are some examples to demonstrate how to use `for` loop with a step:

Example 1:

Suppose you want to print out all even numbers from 0 to 10. You can use the `for` loop with a step of 2 as shown below:

```
for (var i = 0; i <= 10; i += 2) {
   console.log(i);
}
```

Output:
```
0
2
4
6
8
10
```

Example 2:

Suppose you want to print out all odd numbers from 1 to 9. You can use the `for` loop with a step of 2 as shown below:

```
for (var i = 1; i < 10; i += 2) {
   console.log(i);
}
```

Output:
```
1
3
5
7
9
```

Example 3:

Suppose you want to print out the multiplication table of a number (let's say 5) from 1 to 10. You can use the `for` loop with a step of 1 as shown below:

```
var num = 5;

for (var i = 1; i <= 10; i++) {
   console.log(num + " * " + i + " = " + (num * i));
}
```

Output:
```
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
```