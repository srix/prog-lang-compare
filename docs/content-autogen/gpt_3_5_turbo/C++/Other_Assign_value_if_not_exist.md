In C++, we can assign a value to a variable only if it does not already have a value assigned to it. This can be done using if-else statements or ternary operators.

Here's an example of using an if-else statement to assign a value if the variable does not already have a value:

```C++
int x;

if (x == 0) {
    x = 10;
}
```

In this example, we are checking if the variable `x` has been assigned a value. If `x` is equal to 0, we assign the value `10` to it.

Here's another example of using a ternary operator to assign a value if the variable does not already have a value:

```C++
int y = 0;

y = (y == 0) ? 20 : y;
```

This example assigns the value `0` to the variable `y`. The ternary operator checks if `y` is equal to 0. If it is, we assign the value `20` to `y`. If `y` is not equal to 0, we assign its current value to `y`.

It is important to note that assigning a value to an uninitialized variable can result in undefined behavior, so it's always best to initialize variables before using them.