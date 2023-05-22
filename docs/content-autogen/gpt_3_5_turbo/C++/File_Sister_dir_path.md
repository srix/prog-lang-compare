In C++, to get the path of the sister directory of a given directory path, we can use the "filesystem" library, introduced in C++17. Here's an example:

```cpp
#include <iostream>
#include <filesystem>

namespace fs = std::filesystem;

int main() {
    fs::path dirpath = "C:/Users/example/dir1";   // given directory path
    fs::path sispath = dirpath.parent_path() / "dir2";  // sister dir path
    std::cout << sispath << std::endl;
    return 0;
}
```

In the above example, we first create a path object "dirpath" for the given directory, which is "C:/Users/example/dir1". Using the "parent_path()" function of the path object, we get the parent directory of the given directory, which is "C:/Users/example". Then, we use the "/" operator to append the name of the sister directory, which is "dir2". Finally, we print the resulting sister directory path to the console.

Assuming the code is compiled and executed on a Windows operating system, the output will be:

```
C:\Users\example\dir2
```

This means that the sister directory of "C:/Users/example/dir1" is "C:/Users/example/dir2".