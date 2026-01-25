To remove leading and trailing whitespaces from a string in C++, you can use the `std::trim` function from the `<string>` header. Here's an example:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string str = "   hello world!    ";
    std::string trimmed_str = std::trim(str);
    std::cout << trimmed_str << std::endl; // Output: "hello world!"
    return 0;
}
```

In this example, we first define a string `str` that contains leading and trailing spaces. Then we use `std::trim` to remove these spaces and store the result in a new string `trimmed_str`. Finally, we print the trimmed string using `std::cout`. The output should be `"hello world!"` with the leading and trailing spaces removed.