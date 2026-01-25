To call a method (also known as a member function) in a class in C++, you need to create an object of the class and then use the object to access the method. Here's an example:

```C++
#include <iostream>
using namespace std;

class MyClass {
    public:
        void myMethod() {
            cout << "Hello from myMethod!" << endl;
        }
};

int main() {
    MyClass myObject; // create an object of MyClass
    myObject.myMethod(); // call myMethod() using the object
    return 0;
}
```

In the above example, we define a class `MyClass` with one member function `myMethod()` that simply outputs a string. In the `main()` function, we create an object of `MyClass` called `myObject` and then call the `myMethod()` method using the object, using the dot (.) notation. Output:

```
Hello from myMethod!
```

Note that the `public:` keyword is used to specify that the `myMethod()` function is accessible outside the class, and the `void` keyword is used to specify that the function does not return a value.