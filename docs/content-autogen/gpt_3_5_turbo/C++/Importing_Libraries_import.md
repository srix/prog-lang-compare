To import a library in C++, you need to use the `#include` preprocessor directive followed by the name of the library. The library name is enclosed in angle brackets `<>` or double quotes `""`.

Here are some examples:

```cpp
#include <iostream> //Import the standard input-output library

int main() {
    std::cout << "Hello, world!" << std::endl;
    return 0;
}
```

This code imports the standard input-output library and uses the `cout` object to print "Hello, world!" to the console.

```cpp
#include <vector> //Import the vector library

int main() {
    std::vector<int> myVec = {1, 2, 3}; //Create a vector
    myVec.push_back(4); //Add 4 to the end of the vector
    return 0;
}
```

This code imports the vector library and uses the `std::vector` class to create a vector of integers. It then uses the `push_back` function to add an element to the end of the vector.

```cpp
#include "myHeader.h" //Import a custom header file

int main() {
    myFunction(); //Call a function from the custom header file
    return 0;
}
```

This code imports a custom header file named `myHeader.h` using double quotes. It then calls a function named `myFunction` that is defined in the header file.