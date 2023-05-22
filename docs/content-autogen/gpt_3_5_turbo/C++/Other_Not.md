In C++, `not` is a logical operator used to negate the truth value of a condition. The `not` operator works with Boolean expressions, which means it only works with values that are either true or false. 

Here's an example of how to use `not` in C++:

```c++
bool is_raining = false;
if (not is_raining) {
    cout << "It is not raining!" << endl;
}
```

In this example, we have a boolean variable `is_raining` that is initially set to false. The `not` operator is used to negate the Boolean expression `is_raining`. Since `is_raining` is false, its negation is true. Therefore, the output of this program will be "It is not raining!".

Another example of using `not` is as follows:

```c++
int x = 4, y = 5;
if (not (x == y)) {
    cout << "x is not equal to y" << endl;
}
```

In this example, we have two integer variables x and y. The `not` operator is used to negate the Boolean expression `(x == y)`. Since `x` is not equal to `y`, the expression `(x == y)` evaluates to false, and its negation evaluates to true. Therefore, the output of this program will be "x is not equal to y". 

Note that the `not` operator is equivalent to the `!` operator in C++. So, the above two examples can also be written using the `!` operator as follows:

```c++
if (!is_raining) {
    cout << "It is not raining!" << endl;
}

if (!(x == y)) {
    cout << "x is not equal to y" << endl;
}
``` 

Both `not` and `!` operators can be used interchangeably in C++.