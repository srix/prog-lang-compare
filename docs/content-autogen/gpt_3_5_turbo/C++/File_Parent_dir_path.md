To get the parent directory path in C++, you can use the following steps:

1. Include the <iostream> and <filesystem> libraries.

2. Create a path variable that contains the absolute path of the file/directory whose parent directory path you want to retrieve.

3. Use the std::filesystem::path::parent_path() function to retrieve the parent directory path.

4. Convert the parent directory path to a string using the std::filesystem::path::string() function.

Here's an example code snippet:

```
#include <iostream>
#include <filesystem>

int main() {
    std::filesystem::path filePath = "/home/user/document.txt";
    std::filesystem::path parentDirPath = filePath.parent_path();
    std::string parentDirStr = parentDirPath.string();

    std::cout << "Parent directory path: " << parentDirStr << std::endl;

    return 0;
}
```

In this example, the absolute path of the file "/home/user/document.txt" is used to retrieve the parent directory path, which is "/home/user". The code then converts the parent directory path to a string and prints it to the console.