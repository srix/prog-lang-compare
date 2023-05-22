In C++, the logical operators `and` (equivalent to `&&`) and `or` (equivalent to `||`) allow you to create complex logical expressions using simpler boolean expressions.

Here is how to use `or` in C++:

```
bool a = true;
bool b = false;
bool c = true;

// Example 1:
if (a or b) {
    cout << "At least one of a or b is true." << endl;
}

// Example 2:
if (b or c) {
    cout << "At least one of b or c is true." << endl;
}

// Example 3:
if (a or b or c) {
    cout << "At least one of a, b or c is true." << endl;
}
```

In example 1, the condition evaluates to true because `a` is true, even though `b` is false. In example 2, the condition evaluates to true because `c` is true, even though `b` is false. In example 3, the condition evaluates to true because at least one of `a`, `b`, or `c` is true.

Similarly, here is how to use `and` in C++:

```
bool x = true;
bool y = false;
bool z = true;

// Example 1:
if (x and y) {
    cout << "Both x and y are true." << endl;
}

// Example 2:
if (y and z) {
    cout << "Both y and z are true." << endl;
}

// Example 3:
if (x and y and z) {
    cout << "All of x, y and z are true." << endl;
}
```

In example 1, the condition evaluates to false because `y` is false, even though `x` is true. In example 2, the condition evaluates to false because `y` is false, even though `z` is true. In example 3, the condition evaluates to false because `y` is false, even though `x` and `z` are true.