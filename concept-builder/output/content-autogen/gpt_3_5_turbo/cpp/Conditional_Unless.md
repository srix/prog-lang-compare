In C++, `unless` is not a keyword. However, it can be simulated using an `if` statement with a negated condition. The `unless` statement is used when you want to execute a block of code only if a condition is not true. Here's an example:

```cpp
int x = 5;
unless (x == 6) {
   // do something if x is not 6
   cout << "x is not 6!";
}
```

This code will print "x is not 6!" because the condition `x == 6` is false.

The equivalent code using an `if` statement would be:

```cpp
int x = 5;
if (!(x == 6)) {
   // do something if x is not 6
   cout << "x is not 6!";
}
```

It's important to note that the `unless` statement does not actually exist in C++, so it's recommended to use the `if` statement with a negated condition instead to avoid confusion.