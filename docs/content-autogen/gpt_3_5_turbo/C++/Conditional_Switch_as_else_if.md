In C++, the switch statement is used to select one option among multiple options available. It can be used as an alternative to multiple if-else statements in some scenarios. Here is how to use switch as an else-if statement in C++ with examples:

The basic syntax of a switch statement in C++ is as follows:

```
switch(expression) {
    case constant-expression1:
        // code to be executed when expression evaluates to constant-expression1
        break;
    case constant-expression2:
        // code to be executed when expression evaluates to constant-expression2
        break;
    ...
    default:
        // optional code to be executed when none of the cases match
}
```

Here, `expression` is evaluated once and compared to each of the constant expressions (`constant-expression1`, `constant-expression2`, etc.) specified in the case statements. If a match is found, the code inside that case is executed. The `break` statement is used to exit the switch statement and prevent execution of the code in subsequent cases.

Now let's look at an example of using switch instead of else-if statements:

```
// Program to print the name of a month based on its number

#include <iostream>
using namespace std;

int main() {
  int monthNum;

  cout << "Enter the month number (1-12): ";
  cin >> monthNum;

  switch(monthNum) {
    case 1:
      cout << "January" << endl;
      break;
    case 2:
      cout << "February" << endl;
      break;
    case 3:
      cout << "March" << endl;
      break;
    case 4:
      cout << "April" << endl;
      break;
    case 5:
      cout << "May" << endl;
      break;
    case 6:
      cout << "June" << endl;
      break;
    case 7:
      cout << "July" << endl;
      break;
    case 8:
      cout << "August" << endl;
      break;
    case 9:
      cout << "September" << endl;
      break;
    case 10:
      cout << "October" << endl;
      break;
    case 11:
      cout << "November" << endl;
      break;
    case 12:
      cout << "December" << endl;
      break;
    default:
      cout << "Invalid month number" << endl;
  }

  return 0;
}
```

In this example, we take input from the user as the month number and use switch to print the name of the month. If the user enters a number that does not match any of the cases, the default case is executed and an error message is printed.

This is how we can use switch as an alternative to multiple if-else statements in some scenarios.