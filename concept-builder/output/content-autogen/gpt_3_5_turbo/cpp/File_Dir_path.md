In C++, we can get the directory path of a file using the `std::filesystem` library. This library was introduced in C++17, so make sure your compiler supports it. The following code snippets demonstrates how to get the directory path of a file:

```cpp
#include <iostream>
#include <filesystem>

int main() {
    // path to the target file
    std::filesystem::path filePath("C:\\User\\Documents\\example-file.txt");

    // get the directory path of the target file
    std::filesystem::path dirPath = filePath.parent_path();

    // print the directory path
    std::cout << "Directory path: " << dirPath << std::endl;

    return 0;
}
```

Output:
```
Directory path: C:\User\Documents
```

Here, `parent_path()` is a member function of the `std::filesystem::path` class, which returns the parent directory path of the target file. In the example, the target file path is `"C:\User\Documents\example-file.txt"`, and the parent path is `"C:\User\Documents"`. 

Note that the forward slash ("/") can also be used instead of the backslash ("\").