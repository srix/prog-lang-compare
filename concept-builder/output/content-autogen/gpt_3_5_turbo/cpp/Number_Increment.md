In C++, incrementing a number means adding 1 to the current value of that number. There are two main ways to do this:

1. Prefix increment: This involves adding 1 to the value of a variable before any other operations are performed.

```cpp
int num = 5;
++num; // increment num by 1
cout << num; // output: 6
```

2. Postfix increment: This involves adding 1 to the value of a variable after all other operations are performed.

```cpp
int num = 5;
num++; // increment num by 1
cout << num; // output: 6
```

Both of these methods result in the same output, but there are some differences in how they are executed by the compiler. The prefix increment operator tends to be faster since it avoids creating an unnecessary temporary variable. However, in most cases the performance difference will be negligible.