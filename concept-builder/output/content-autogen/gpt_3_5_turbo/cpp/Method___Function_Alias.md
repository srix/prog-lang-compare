In C++, aliases can be created using the `using` keyword. The syntax for using an alias in C++ is as follows:

```
using <alias_name> = <original_name>;
```

Here’s an example to demonstrate how an alias could be used to rename the data type `unsigned long long` to `uLL`:

```
#include <iostream>
using uLL = unsigned long long;

int main() {
  uLL x = 12345678901234567LLU;
  std::cout << x << std::endl;

  return 0;
}
```

In this example, we’ve used `using uLL = unsigned long long` to create an alias `uLL` which is equivalent to the data type `unsigned long long`. Then in the `main` function, we’ve declared a variable `x` of type `uLL` and assigned a value to it.

Another example to demonstrate the use of alias in C++ is to create an alias for a function pointer. The syntax for using an alias for a function pointer is as follows:

```
using <alias_name> = <return_type> (*)(<parameter_list>);
```

Here’s an example to demonstrate how a function pointer alias could be used to simplify the declaration and usage of a function pointer:

```
#include <iostream>
bool isEven(int x);
bool isOdd(int x);
using checkFunc = bool (*)(int);

int main() {
  int x = 7;
  checkFunc f;
  if (x % 2 == 0) {
    f = isEven;
  } else {
    f = isOdd;
  }
  std::cout << f(x) << std::endl;

  return 0;
}

bool isEven(int x) {
  return x % 2 == 0;
}

bool isOdd(int x) {
  return x % 2 != 0;
}
```

In this example, we’ve used `using checkFunc = bool (*)(int)` to create an alias `checkFunc` which is equivalent to a function pointer that takes an integer parameter and returns a boolean value. Then in the `main` function, we’ve declared a variable `f` of type `checkFunc` which simplifies the declaration and usage of a function pointer. Finally, we’ve called the function `f` with an integer argument `x` to check if it’s even or odd.