To get the maximum or minimum of two numbers in C++, we can use the built-in functions `max()` and `min()` from the `<algorithm>` library.

Here are some examples:

```
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
   int a = 10;
   int b = 20;

   // Finding maximum of two numbers
   int max_num = max(a, b);
   cout << "Maximum of " << a << " and " << b << " is " << max_num << endl;

   // Finding minimum of two numbers
   int min_num = min(a, b);
   cout << "Minimum of " << a << " and " << b << " is " << min_num << endl;

   return 0;
}
```

Output:

```
Maximum of 10 and 20 is 20
Minimum of 10 and 20 is 10
```

In the above example, we have two variables `a` and `b` and we have used the `max()` and `min()` functions to find their maximum and minimum values respectively.