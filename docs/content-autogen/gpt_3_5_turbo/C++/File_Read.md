To read a file in C++, you can use the `std::ifstream` class provided in the `<fstream>` header file. Here is an example code that demonstrates how to open a file and read its contents using a `while` loop:

```c++
#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream file("example.txt");
    std::string line;
    
    if (file.is_open()) { // check if the file opened successfully
        while (std::getline(file, line)) { // read each line in the file
            std::cout << line << '\n'; // output the line to the console
        }
        file.close(); // close the file when finished
    }
    else {
        std::cout << "Unable to open file\n";
    }
    return 0;
}
```

In this code, we first create an `std::ifstream` object called `file`, which we use to open the file "example.txt". We also create an `std::string` called `line` which will be used to store each line of the file as we read it.

Next, we check whether the file was opened successfully using the `is_open()` method provided by the `std::ifstream` class. If it was, we enter a loop that reads each line of the file using the `std::getline()` function. This function takes two arguments: the `std::ifstream` object we created (`file`), and the `std::string` object we created to store each line (`line`). It reads each line of the file until the end of the file is reached.

Finally, we output each line to the console using `std::cout`, and close the file using the `close()` method before returning 0 to indicate success. If the file could not be opened, we simply output an error message to the console.