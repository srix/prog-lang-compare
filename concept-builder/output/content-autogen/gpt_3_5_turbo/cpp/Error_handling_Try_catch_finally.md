In C++, try/catch/finally are used to handle exceptions in the program. The try block consists of the code where an exception can occur, while the catch block contains the code that handles the exceptions. Finally block contains code that executes after the try block irrespective of whether an exception occurred or not. 

Here's an example code snippet using try/catch/finally:

```
#include <iostream>

using namespace std;

int main() {
    try {
        int a = 10;
        int b = 0;
        int c = a/b; // potential division by zero error
        cout << c << endl;
    } catch(const char* msg) {
        cout << "Error: " << msg << endl;
    } catch(...) {
        cout << "Unknown error" << endl;
    } finally {
        cout << "This will always execute" << endl;
    }
    return 0;
}
```

In the above code, the try block attempts to divide `a` by `b`, but `b` has a value of 0 which will cause a division by zero exception. The catch block contains an error message to handle the exception and outputs it to the console. 

The `catch(...)` block is a general catch block that handles any other exception that is not caught by the previous catch blocks. 

Finally, the `finally` block will always execute regardless of whether an exception occurs or not. 

When run, the output will be:

```
Error: division by zero
This will always execute
```

In summary, try/catch/finally are useful exception handling tools to ensure that the program doesn't crash in case of an error. They help make the program more robust by handling any exceptions that may occur and prevent it from crashing.