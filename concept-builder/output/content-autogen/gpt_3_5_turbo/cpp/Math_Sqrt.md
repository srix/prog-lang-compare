To calculate the square root of a number in C++, you can make use of the `sqrt()` function from the `cmath` library. Here's an example:

```c++
#include <iostream>
#include <cmath>

using namespace std;

int main() {
  double number, result;

  cout << "Enter a number: ";
  cin >> number;

  result = sqrt(number);

  cout << "The square root of " << number << " is " << result << endl;

  return 0;
}
```

In this example, we first declare the variables `number` and `result` of type `double`. We then prompt the user to enter a number which we store in the `number` variable. We then calculate the square root of this number using the `sqrt()` function and store the result in the `result` variable. Finally, we output the result to the console using `cout`.

For example, if the user enters `16`, the program will output:

```
The square root of 16 is 4
```

Note that the `sqrt()` function returns a `double`, so we need to make sure to declare our variables as `double`s in order to store the result. Also note that we need to include the `cmath` library to use the `sqrt()` function.