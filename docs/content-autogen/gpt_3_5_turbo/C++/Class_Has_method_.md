In C++, you can check if a class has a method using the `std::is_member_function_pointer` type trait. 

Here is an example:

```
#include <iostream>
#include <type_traits>

class MyClass {
  public:
    void myMethod() {}
};

int main() {
  if(std::is_member_function_pointer<decltype(&MyClass::myMethod)>::value) {
    std::cout << "MyClass has myMethod." << std::endl;
  } else {
    std::cout << "MyClass does not have myMethod." << std::endl;
  }
  return 0;
}
```

In the example above, `std::is_member_function_pointer` is used to check if `MyClass` has a method called `myMethod`. If the class does have the method, the program prints "MyClass has myMethod.". If it doesn't, it prints "MyClass does not have myMethod.".

Another example:

```
#include <iostream>
#include <type_traits>

class MyClass {
  public:
    int myInt;
};

int main() {
  if(std::is_member_function_pointer<decltype(&MyClass::myInt)>::value) {
    std::cout << "MyClass has myInt method." << std::endl;
  } else {
    std::cout << "MyClass does not have myInt method." << std::endl;
  }
  return 0;
}
```

In this example, `std::is_member_function_pointer` is used to check if `MyClass` has a method called `myInt`. Since `myInt` is a member variable and not a method, the program prints "MyClass does not have myInt method.".