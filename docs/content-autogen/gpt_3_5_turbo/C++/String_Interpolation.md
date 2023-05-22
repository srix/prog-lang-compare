Interpolation is the process of inserting values into a string by using placeholders or variables. C++ provides various ways to interpolate strings, some of which are:

1. Using the + operator:
The simplest way to interpolate strings in C++ is by using the concatenation operator +. Here is an example:

```c++
#include <iostream>
#include <string>
using namespace std;

int main() {
   string name = "John";
   int age = 25;
   string message = "My name is " + name + " and I am " + to_string(age) + " years old.";
   cout << message << endl;
   return 0;
}
```

Here, we have defined a string variable name and an integer variable age. We have created a new string variable message and used the concatenation operator + to insert values from the name and age variables into the string.

2. Using stringstream:
Another way to interpolate strings in C++ is by using stringstream. The stringstream class provides a convenient way of concatenating values of various types into a string. Here is an example:

```c++
#include <iostream>
#include <sstream>
#include <string>
using namespace std;

int main() {
   string name = "John";
   int age = 25;
   stringstream ss;
   ss << "My name is " << name << " and I am " << age << " years old.";
   string message = ss.str();
   cout << message << endl;
   return 0;
}
```

Here, we have defined a string variable name and an integer variable age. We have created a stringstream object ss and used its << operator to insert values from the name and age variables into the string.

Note that we can also use the to_string function to convert numeric values to strings before inserting them into the stringstream object.

3. Using sprintf:
The sprintf function in C++ can also be used to interpolate strings. It works by formatting a string with variables in C-style. Here is an example:

```c++
#include <iostream>
#include <cstdio>
#include <string>
using namespace std;

int main() {
   string name = "John";
   int age = 25;
   char message[100];
   sprintf(message, "My name is %s and I am %d years old.", name.c_str(), age);
   cout << message << endl;
   return 0;
}
```

Here, we have defined a string variable name and an integer variable age. We have created a char array message and used the sprintf function to insert values from the name and age variables into the string.

Note that we have used the c_str function to convert the name variable to a C-style string before inserting it into the sprintf function.