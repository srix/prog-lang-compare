In C++, you can convert a string to an integer using the `stoi` function. Here is an example:

```c++
#include <iostream>
#include <string>

int main() {
    std::string str = "123";
    int myInt = std::stoi(str);

    std::cout << "The string is: " << str << std::endl;
    std::cout << "The integer is: " << myInt << std::endl;

    return 0;
}
```

In this example, we first declare a string variable named `str` and initialize it with the value of "123". We then declare an integer variable named `myInt` and use the `stoi` function to convert the `str` variable to an integer.

Finally, we print out `str` and `myInt` using `cout` statements. The output of this program will be:

```
The string is: 123
The integer is: 123
```

Note that if the string cannot be converted to an integer, the `stoi` function will throw a `std::invalid_argument` or `std::out_of_range` exception. You should be aware of this and handle these exceptions appropriately in your code.