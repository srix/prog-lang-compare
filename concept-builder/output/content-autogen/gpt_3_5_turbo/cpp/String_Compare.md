In C++, you can compare two strings using the `compare()` function or the `==` operator.

Here's an example of using `compare()` function:

```c++
#include <iostream>
#include <string>

using namespace std;

int main() {

   string str1 = "hello";
   string str2 = "world";
   string str3 = "hello";
   
   if(str1.compare(str2) == 0) {
      cout << "Strings are equal" << endl;
   } else {
      cout << "Strings are not equal" << endl;
   }
   
   if(str1.compare(str3) == 0) {
      cout << "Strings are equal" << endl;
   } else {
      cout << "Strings are not equal" << endl;
   }
   
   return 0;
}
```

The output of the program will be:
```
Strings are not equal
Strings are equal
```

Here's an example of using `==` operator to compare two strings:

```c++
#include <iostream>
#include <string>

using namespace std;

int main() {

   string str1 = "hello";
   string str2 = "world";
   string str3 = "hello";
   
   if(str1 == str2) {
      cout << "Strings are equal" << endl;
   } else {
      cout << "Strings are not equal" << endl;
   }
   
   if(str1 == str3) {
      cout << "Strings are equal" << endl;
   } else {
      cout << "Strings are not equal" << endl;
   }
   
   return 0;
}
```

The output of the program will be:
```
Strings are not equal
Strings are equal
```

As you can see, both methods can be used to compare strings in C++.