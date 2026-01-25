In C++, we can use the typeid operator to get the type of an object. This operator returns a type_info object that contains information about the type of the object. Here is an example:

```
#include <iostream>
#include <typeinfo>

using namespace std;

int main() {
    int i = 10;
    double d = 3.14;
    char c = 'a';
    bool b = true;
    
    cout << typeid(i).name() << endl;
    cout << typeid(d).name() << endl;
    cout << typeid(c).name() << endl;
    cout << typeid(b).name() << endl;
    
    return 0;
}
```

Output:

```
i
d
c
b
```

In the above example, we have declared four variables of different types and used the typeid operator to get their types. The `name()` method of the type_info object returns a string that represents the name of the type. In the output, you can see that we get "i" for int, "d" for double, "c" for char and "b" for bool.