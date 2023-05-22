In C++, random numbers can be generated through the use of built-in functions in the standard library. Here are some examples:

1. Using the rand() function
The `rand()` function is a commonly used function in C++ to generate random numbers. To use it, you must include the `cstdlib` header file in your program. Here's an example:

```cpp
#include <cstdlib> 
#include <ctime> 

int main() 
{ 
    // use the current time as the seed for random number generation
    srand(time(0)); 
    
    // generate 5 random numbers between 1 and 100
    for(int i = 0; i < 5; i++) 
    { 
        int randomNum = rand() % 100 + 1; 
        cout << randomNum << endl; 
    } 
    
    return 0; 
}
```

2. Using the random_device and uniform_int_distribution classes
The `random_device` class in C++ provides a non-deterministic source of entropy for generating random numbers. The `uniform_int_distribution` class allows you to generate random integers within a specified range. Here's an example:

```cpp
#include <iostream> 
#include <random> 

int main() 
{ 
    // use the current time as the seed for random number generation
    std::random_device rd; 
    std::mt19937 mt(rd()); 
    
    // generate 5 random numbers between 1 and 100
    std::uniform_int_distribution<int> dist(1, 100); 
    
    for(int i = 0; i < 5; i++) 
    { 
        int randomNum = dist(mt); 
        std::cout << randomNum << std::endl; 
    } 
    
    return 0; 
}
``` 

In this example, `mt` is a Mersenne Twister random number engine that is seeded with the output of `rd`. The `dist` object initializes a distribution for generating random integers between 1 and 100. The `mt` object is then passed to the distribution object to generate the random values.

Both of these methods are useful for generating pseudorandom numbers in C++.