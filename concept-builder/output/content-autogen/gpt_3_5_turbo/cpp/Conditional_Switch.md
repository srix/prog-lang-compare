The switch statement in C++ allows you to create several conditional statements using only one expression. It is used when you have to choose between multiple alternatives based on the value of a single expression. 

Here's a basic syntax for the switch statement in C++:

```
switch(expression){
   case value1:
      //code to be executed if expression == value1
      break;
   case value2:
      //code to be executed if expression == value2
      break;
   ...
   default:
      //code to be executed if expression doesn't match any of the cases
}
```

Here's an example code to illustrate how to use the switch statement:

```
#include <iostream>
using namespace std;

int main() {
   int x = 2;

   switch(x) {
      case 1:
         cout << "x is equal to 1";
         break;
      case 2:
         cout << "x is equal to 2";
         break;
      case 3:
         cout << "x is equal to 3";
         break;
      default:
         cout << "x is not equal to 1, 2 or 3";
   }

   return 0;
}
```

In this example, the value of 'x' is checked against each case, and the corresponding statement is executed.

So, if 'x' is 2, the output from the program will be "x is equal to 2". If 'x' is not equal to 1, 2 or 3, the default case will be executed. Likewise, you can add as many cases as you want for different scenarios.