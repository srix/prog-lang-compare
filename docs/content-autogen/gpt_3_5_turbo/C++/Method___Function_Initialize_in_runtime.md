In C++, functions can be initialized at runtime through the use of function pointers. A function pointer is a variable that stores the memory address of a specified function. Using function pointers, we can call a desired function dynamically based on the conditions provided at runtime.

Here's an example of initializing a function at runtime using function pointers in C++:

```c++
#include <iostream>

void add(int a, int b) {
    std::cout << "Sum of " << a << " and " << b << " is " << (a + b) << std::endl;
}

void subtract(int a, int b) {
    std::cout << "Difference between " << a << " and " << b << " is " << (a - b) << std::endl;
}

int main() {
    void (*operation)(int, int);  // declaring function pointer
    
    int choice, a, b;
    
    std::cout << "Enter your choice:\n1. Add\n2. Subtract\n";
    std::cin >> choice;
    
    if (choice == 1) {
        operation = add;  // assigning function pointer to 'add' function
    } else if (choice == 2) {
        operation = subtract;  // assigning function pointer to 'subtract' function
    } else {
        std::cout << "Invalid choice!";
        return 0;
    }
    
    std::cout << "Enter two numbers: ";
    std::cin >> a >> b;
    
    operation(a, b);  // calling the function dynamically using function pointer
    
    return 0;
}
```

In this example, we have two functions `add()` and `subtract()` that take two integer arguments and perform addition and subtraction operations respectively. We define a function pointer `operation` which takes two integer arguments and returns void. 

At runtime, we ask the user to choose between the two operations and based on the choice, assign the function pointer to either the `add()` or `subtract()` function. Finally, we ask the user to input two numbers and call the function dynamically using the function pointer `operation`. This allows us to initialize the function at runtime and perform desired operations dynamically based on user choice.