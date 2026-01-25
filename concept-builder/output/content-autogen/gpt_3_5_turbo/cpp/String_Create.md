Sure, here's how to create a string in C++:

There are two main ways to create a string in C++. The first way is to use an array of characters, and the second way is to use the `string` class.

1. Creating a string using an array of characters:

```c++
char myString[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
```

This creates a char array named `myString` with the value "Hello". Note the `\0` at the end to terminate the string.

2. Creating a string using the `string` class:

```c++
string myString = "Hello";
```

This creates a `string` object named `myString` with the value "Hello".

Here's an example of using both methods to output the same string:

```c++
#include <iostream>
#include <string>

using namespace std;

int main() {
    // Creating a string using an array of characters
    char myString[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
    cout << "Using character array: " << myString << endl;

    // Creating a string using the string class
    string myString2 = "Hello";
    cout << "Using string class: " << myString2 << endl;

    return 0;
}
```

This will output:

```
Using character array: Hello
Using string class: Hello
```