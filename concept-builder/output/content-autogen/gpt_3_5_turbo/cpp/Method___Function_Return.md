Returning a value from a function or method in C++ means that the function or method computes or processes some value and needs to send that value back to the caller to use it in the rest of the program. This can be achieved using the `return` statement.

Here's an example of how to use `return` in a function that calculates the sum of two integers:

```c++
int sum(int num1, int num2) {
    int result = num1 + num2;
    return result; // return the sum to the caller
}
```

In this example, the function `sum` takes two integer parameters, `num1` and `num2`, calculates their sum and stores it in a variable called `result`. The `return` statement then sends the value of `result` back to the caller of the function.

To use the returned value, you can assign the function call to a variable:

```c++
int a = 5;
int b = 7;
int c = sum(a, b); // c will receive the value of 12 returned by sum()
```

Alternatively, you can use the returned value directly in an expression:

```c++
int a = 5;
int b = 7;
int c = sum(a, b) * 2; // c will receive the value of 24 (sum of a and b, multiplied by 2)
```