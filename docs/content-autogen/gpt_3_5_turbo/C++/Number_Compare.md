In C++, we can use comparison operators to compare two numbers. The comparison operators in C++ are < (less than), > (greater than), <= (less than or equal to), >= (greater than or equal to), == (equal to) and != (not equal to).

Here are some examples of how to use these comparison operators:

```c++
#include <iostream>
using namespace std;

int main() {
   int a = 10, b = 5;

   // using < operator to check if a is less than b
   if(a < b) {
      cout << "a is less than b" << endl;
   } else {
      cout << "a is not less than b" << endl;
   }

   // using > operator to check if a is greater than b
   if(a > b) {
      cout << "a is greater than b" << endl;
   } else {
      cout << "a is not greater than b" << endl;
   }

   //using <= operator to check if a is less than or equal to b
   if(a <= b) {
      cout << "a is less than or equal to b" << endl;
   } else {
      cout << "a is not less than or equal to b" << endl;
   }

   //using >= operator to check if a is greater than or equal to b
   if(a >= b) {
      cout << "a is greater than or equal to b" << endl;
   } else {
      cout << "a is not greater than or equal to b" << endl;
   }

   //using == operator to check if a is equal to b
   if(a == b) {
      cout << "a is equal to b" << endl;
   } else {
      cout << "a is not equal to b" << endl;
   }

   //using != operator to check if a is not equal to b
   if(a != b) {
      cout << "a is not equal to b" << endl;
   } else {
      cout << "a is equal to b" << endl;
   }

   return 0;
}
```
Output:
```
a is not less than b
a is greater than b
a is not less than or equal to b
a is greater than or equal to b
a is not equal to b
a is not equal to b
```