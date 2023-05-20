The `for` loop is used in Java to execute a block of code repeatedly for a fixed number of times, based on a given condition. It is often used in situations where you want to perform an action a specific number of times. The `for` loop has three parts: initialization, condition and increment/decrement. The `step` would refer to the increment or decrement in the loop.

Here's an example of a simple `for` loop with a step of 2 that prints even numbers between 0 and 10:

```java
for (int i = 0; i <= 10; i+=2) {
    System.out.print(i + " ");
}
```

Output:
```
0 2 4 6 8 10
```

In this example, the loop starts with an initialization of `int i = 0`. The loop will execute as long as the condition `i <= 10` is true. And after each iteration of the loop, the `i` variable will be incremented by 2 (i+=2).

Here's another example of a `for` loop with a step of -1 that counts down from 10 to 1:

```java
for (int i = 10; i >= 1; i--) {
    System.out.print(i + " ");
}
```

Output:
```
10 9 8 7 6 5 4 3 2 1
```

In this example, the loop starts with an initialization of `int i = 10`. The loop will execute as long as the condition `i >= 1` is true. And after each iteration of the loop, the `i` variable will be decremented by 1 (i--). 

So, using steps in a `for` loop allows you to control the increment or decrement of the loop variable, allowing you to make the loop more flexible to suit your needs.