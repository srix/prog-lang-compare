In C++, to get the file path, you can use various methods such as:

1. Using the `__FILE__` macro:

This macro returns the full path of the current source file. You can use it to get the location of the source file and append the desired filename to it to get the complete file path. Here is an example:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
   // Get the current source file path
   string currentFilePath = __FILE__;

   // Append the desired filename to get the complete file path
   string desiredFilePath = currentFilePath.substr(0, currentFilePath.find_last_of("\\/"))
                             + "/myfile.txt";

   // Print the complete file path
   cout << desiredFilePath << endl;

   return 0;
}
```

In this example, we first get the current source file path using the `__FILE__` macro. We then use the `substr()` and `find_last_of()` functions to extract the directory part of the path and append the desired filename to it.

2. Using the `filesystem` library:

C++17 introduced a new standard library called `std::filesystem` that provides many functions for file-system operations. You can use the `std::filesystem::current_path()` function to get the current directory and use the `std::filesystem::path()` function to create file paths. Here is an example:

```cpp
#include <iostream>
#include <filesystem>
#include <string>
using namespace std;
namespace fs = std::filesystem;

int main() {
   // Get the current directory
   fs::path currentDir = fs::current_path();

   // Create the complete file path
   fs::path filePath = currentDir / "myfile.txt";

   // Print the complete file path
   cout << filePath << endl;

   return 0;
}
```

In this example, we use the `fs::current_path()` function to get the current directory and the `fs::path()` function to create the complete file path by concatenating the directory and filename.

Note: The `std::filesystem` library is not supported by all compilers and operating systems yet. You may have to use a different approach in those cases.