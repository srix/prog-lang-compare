In C++, date is a built-in data type that represents a calendar date. Here's an example of how to use the date data type in C++:

```c++
#include <iostream>
#include <chrono>

int main() {
    // Get the current date
    auto current_date = std::chrono::system_clock::now();
    std::time_t current_time = std::chrono::system_clock::to_time_t(current_date);
    
    // Print the current date in the format: YYYY-MM-DD
    std::cout << std::put_time(std::localtime(&current_time), "%Y-%m-%d") << std::endl;
    
    // Create a custom date object: January 1st, 2022
    std::chrono::system_clock::time_point custom_date = std::chrono::system_clock::time_point(std::chrono::hours(0));
    custom_date += std::chrono::hours(24 * (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30));
    std::time_t custom_time = std::chrono::system_clock::to_time_t(custom_date);
    
    // Print the custom date in the format: DD/MM/YYYY
    std::cout << std::put_time(std::localtime(&custom_time), "%d/%m/%Y") << std::endl;
    
    return 0;
}
```

In this example, we first get the current date using the `std::chrono::system_clock::now()` function. We then convert it to a `std::time_t` object using the `std::chrono::system_clock::to_time_t()` function. We can then use the `std::put_time()` function to format and print the date in the desired format (`%Y-%m-%d`).

We then create a custom date object for January 1st, 2022 using the `std::chrono::system_clock::time_point` constructor and some basic arithmetic with hours. We again convert this to a `std::time_t` object and use `std::put_time()` to format and print the date in the desired format (`%d/%m/%Y`).