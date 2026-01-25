In C++, the process of combining two or more strings to create a new string is called concatenation. There are a few different ways to concatenate strings in C++, including using the + operator or the append() function. Here are some examples:

Using the + operator:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
   string first = "Hello";
   string second = "World";
   string result = first + " " + second;
   cout << result << endl;
   return 0;
}
```

Result:
```
Hello World
```

Using the append() function:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string first = "Hello";
    string second = "World";
    first.append(" ");
    first.append(second);
    cout << first << endl;
    return 0;
}
```

Result:
```
Hello World
```