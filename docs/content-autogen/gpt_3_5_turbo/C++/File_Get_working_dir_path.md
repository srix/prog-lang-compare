In C++, the current working directory can be obtained using the `getcwd()` function provided by the `<unistd.h>` library.

Here's an example program that shows how to get the current working directory:

```c++
#include <iostream>
#include <unistd.h>

int main() {
    char cwd[256];
    if (getcwd(cwd, sizeof(cwd)) != NULL) {
        std::cout << "Current working directory: " << cwd << std::endl;
    } else {
        std::cout << "Error: Unable to get current working directory." << std::endl;
    }
    return 0;
}
```

In this program, we first declare a character array `cwd` of size 256 to hold the current working directory. Then, we call the `getcwd()` function with two parameters: the first is the `cwd` buffer we defined, and the second is the size of the buffer.

If `getcwd()` is successful, it returns a pointer to the `cwd` buffer, and we print it out. Otherwise, we print an error message to the console.

Here's what the output might look like:

```
Current working directory: /home/user/project
```

Note that the current working directory can change based on the environment your program is running in, so it's a good practice to check the return value of `getcwd()` to make sure it was successful.