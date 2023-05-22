Sure! Converting an integer to a string is a common operation in C++. Here's how you can do it using the `to_string()` function:

```c++
#include <iostream>
#include <string>

int main() {
    int num = 1234;
    std::string str = std::to_string(num);
    std::cout << "The integer " << num << " can be represented as the string " << str << std::endl;
    return 0;
}
```

In this example, we declare an integer `num` with a value of 1234. We then use the `to_string()` function to convert `num` to a string and store it in the `str` variable. Finally, we print out the original integer and its string representation using `std::cout`.

Output:
```
The integer 1234 can be represented as the string 1234
```

Here's another example that demonstrates how to convert a negative integer to a string:

```c++
#include <iostream>
#include <string>

int main() {
    int num = -567;
    std::string str = std::to_string(num);
    std::cout << "The integer " << num << " can be represented as the string " << str << std::endl;
    return 0;
}
```

Output:
```
The integer -567 can be represented as the string -567
```

Note that the sign of the integer is preserved in the string representation.