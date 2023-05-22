In C++, you can check if a value is null or not using pointers or by comparing the value directly.

1. Checking for Null Pointer:

To determine if a pointer is null or not, you can use the pointer value itself. If the pointer is null, it will have a value of 0 or nullptr.

```c++
int* ptr = nullptr;  // pointer is explicitly set to null
if (ptr == nullptr) {
    std::cout << "Pointer is null\n";  // Output: Pointer is null
}
```

Or you can use the shorthand notation of `!ptr` which checks if the pointer is pointing to any address or not:

```c++
int* ptr = nullptr;
if (!ptr) {
    std::cout << "Pointer is null\n";  // Output: Pointer is null
}
```

2. Checking for true/false value:

To check if a value is true or false, you can use the `bool` data type. In C++, the `true` value is represented by 1, while `false` is represented by 0.

```c++
bool a = true;
bool b = false;
if (a) {
    std::cout << "a is true\n";  // Output: a is true
}
if (!b) {
    std::cout << "b is false\n";  // Output: b is false
}
```

You can also use comparison operators to check if a value is true or false:

```c++
int x = 10;
if (x > 5) {
    std::cout << "x is true\n";  // Output: x is true
}
if (x == 0) {
    std::cout << "x is false\n";  // This condition will not be met
}
```

Note that any non-zero value is equivalent to true, while zero is equivalent to false.