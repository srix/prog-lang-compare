In C++, we can remove a part of a string using various methods. One of the most commonly used methods is erase() function. Here is the general syntax of the erase() function:

```
str.erase(start_index, length);
```

This function removes `length` number of characters from the given `start_index` of the string `str`. 

Let's see some examples below:

#### Example 1: Removing characters from the beginning of the string

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str = "Hello World!";
  
  str.erase(0, 6);  // remove 6 characters from the beginning
  cout << str << endl; // Output: World!
  
  return 0;
}
```

In this example, the `erase()` function removes the first 6 characters ("Hello ") from the string "Hello World!" starting from index "0". After erasing, the string becomes "World!" which is output by the `cout` statement.

#### Example 2: Removing characters from the end of the string

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str = "Hello World!";
  
  str.erase(str.length()-6);  // remove the last 6 characters
  cout << str << endl; // Output: Hello
  
  return 0;
}
```

Here, we removed the last 6 characters ("World!") of the string "Hello World!" by passing the index "str.length()-6" as the starting index of the erase() function. The `str.length()` function returns the length of the given string, and "-6" means removing the last 6 characters. After removing "World!", the string becomes "Hello", which is the output of the `cout` statement.

#### Example 3: Removing characters from the middle of the string

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str = "Hello World!";
  
  str.erase(6, 5);  // remove 5 characters starting from index 6
  cout << str << endl; // Output: Hello!
  
  return 0;
}
```

In this example, we removed 5 characters ("World") from the string "Hello World!" by passing index "6" and length "5" to the erase() function. The part "World" is removed, and the string becomes "Hello!", which is the output of the `cout` statement.

#### Example 4: Removing all characters of the string

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string str = "Hello World!";
  
  str.erase();  // remove all characters
  cout << str << endl; // Output: 
  
  return 0;
}
```

If we call erase() function without any arguments, it will remove all characters of the given string. In this example, the given string "Hello World!" becomes an empty string after calling erase() without any arguments. Therefore, the output of the `cout` statement is an empty string.