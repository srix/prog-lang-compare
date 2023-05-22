In C++, we can replace a substring within a string using the `replace()` function. The `replace()` function accepts four arguments:
```
string.replace(startingIndex, length, newSubstring)
```
Here, `startingIndex` is the index of the first character in the original string that will be replaced. `length` is the number of characters to be replaced. `newSubstring` is the new substring that will replace the old substring.

Here is an example where we replace a substring within a string:
```C++
#include <iostream>
#include <string>

using namespace std;

int main() {
   string str = "I like to code";
   str.replace(7, 3, "love");
   cout << str << endl;
   return 0;
}
```

In this example, the starting index is 7, the length is 3, and the new substring is "love". Therefore, the output of this program will be: `I love to code`.

Note that if the length of the new substring is different from the length of the old substring, the length of the resulting string will be different from the original string. Therefore, we should be careful when using the replace() function.