In C++, we can use the `#include` directive to import code from another file into our current file. This is also known as a header file, which contains function prototypes, definitions of constants, and classes.

Here's an example of how to import another file in C++:

Assume you have a file named `math_operations.h` which contains function prototypes:
```
//math_operations.h
#ifndef MATH_OPERATIONS_H_
#define MATH_OPERATIONS_H_

int add(int a, int b);
int subtract(int a, int b);

#endif // MATH_OPERATIONS_H_
```
Then,in your `main.cpp` file, you can include this header file using the `#include` directive like this:
```
#include "math_operations.h"
#include <iostream>

using namespace std;

int main() {
    int a = 5, b = 7;
    cout << "The sum of " << a << " and " << b << " is " << add(a, b) << endl;
    cout << "The difference between " << a << " and " << b << " is " << subtract(a, b) << endl;
    return 0;
}
```
In this example, we `#include "math_operations.h"` at the beginning of the `main.cpp` file to use the functions declared in the header file. 

Keep in mind that if you use `#include` to include the same header file in multiple source files, it will be included and compiled multiple times, which can lead to errors. To avoid this, you can use header guards like `#ifndef`, `#define`, and `#endif` in the included header file to only allow it to be included once.