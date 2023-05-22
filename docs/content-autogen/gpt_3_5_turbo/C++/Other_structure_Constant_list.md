In C++, a constant list is a type of array that holds a fixed set of values that cannot be changed during the program execution. Here's an example of how to use constant list in C++:

```
#include <iostream>

using namespace std;

int main() {
    const int SIZE = 5;
    const int numbers[SIZE] = {1, 2, 3, 4, 5};

    // Output the values of the constant array
    for (int i = 0; i < SIZE; i++) {
        cout << numbers[i] << " ";
    }

    return 0;
}
```

In this example, a constant array named `numbers` is declared and initialized with 5 integer values. The `const` keyword ensures that the values of the array are fixed and cannot be changed at runtime. 

You can access the elements of the constant array just like a regular array. In this case, the program uses a for loop to output the values of the `numbers` array to the console. 

Note that the size of the array is defined as a constant variable `SIZE`, which ensures that the size of the array is fixed and cannot be changed during the program's execution.