In C++, a closure can be implemented using lambda expressions. A closure is a function object that has access to variables local to the scope in which it was defined. 

Here's an example of using closure in C++:

```c++
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = { 1, 2, 3, 4, 5 };

    int count = 0; // a variable local to the main function

    std::for_each(numbers.begin(), numbers.end(), [&count](int n) { // using lambda expression
        if (n % 2 == 0) {
            count++;
        }
    });

    std::cout << "The number of even numbers in the vector is: " << count << std::endl;

    return 0;
}
```

In this example, we use `std::for_each()` algorithm to iterate through a vector of integers and count how many even numbers are there. The closure, which is the lambda expression ` [&count](int n) { ... }`, captures the `count` variable from the main function's scope and increments it every time it encounters an even number in the vector.

The square brackets `[&count]` indicate that we want to capture `count` by reference so its value can be modified by the closure. 

This is just a simple example but closures are particularly useful when working with algorithms that require a function object as a parameter, such as `std::sort()` or `std::transform()`.