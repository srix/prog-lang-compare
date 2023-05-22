In C++, time can be used to measure the duration of code execution or for scheduling events. Here are a few examples of how to use it:

1. Measuring code execution time:

```
#include <iostream>
#include <chrono>

int main() {
   auto start = std::chrono::high_resolution_clock::now();

   // your code here

   auto end = std::chrono::high_resolution_clock::now();
   auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);

   std::cout << "Execution time: " << duration.count() << "us" << std::endl;

   return 0;
}
```

In this example, we use `std::chrono::high_resolution_clock` to get the current time at the start and end of our code. We then take the difference between the two to get the duration of our code execution and output it in microseconds.

2. Delaying execution:

```
#include <iostream>
#include <thread>

int main() {
   std::cout << "Start" << std::endl;

   std::this_thread::sleep_for(std::chrono::seconds(1));

   std::cout << "End" << std::endl;

   return 0;
}
```

In this example, we use `std::this_thread::sleep_for` to delay the execution of our code for 1 second.

3. Getting the current time:

```
#include <iostream>
#include <ctime>

int main() {
   std::time_t current_time = std::time(nullptr);

   std::cout << "Current time: " << std::ctime(&current_time) << std::endl;

   return 0;
}
```

In this example, we use `std::time` to get the current time as a `std::time_t` object and then convert it to a human-readable format using `std::ctime`.