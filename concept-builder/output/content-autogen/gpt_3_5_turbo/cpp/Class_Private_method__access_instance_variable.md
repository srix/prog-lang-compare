In C++, the private members of a class can only be accessed by member functions or friend classes and functions. Therefore, to access an instance variable in a private method, you can either make the method a member function or a friend function of the class.

Here is an example of accessing an instance variable in a private member function:

```c++
#include <iostream>

class MyClass {
private:
    int myPrivateVariable;

    void myPrivateMethod() {
        std::cout << "The value of myPrivateVariable is: " << myPrivateVariable << std::endl;
    }

public:
    void setMyVariable(int x) {
        myPrivateVariable = x;
    }

    void callMyPrivateMethod() {
        myPrivateMethod();
    }
};

int main() {
    MyClass myClassObject;
    myClassObject.setMyVariable(10);
    myClassObject.callMyPrivateMethod();
    return 0;
}
```

In this example, the private instance variable `myPrivateVariable` is accessed from the private member function `myPrivateMethod()`. The method is then called from the public member function `callMyPrivateMethod()`, which is accessible from the `main()` function.

Alternatively, you can make the private method a friend function of the class, as shown in the following example:

```c++
#include <iostream>

class MyClass {
private:
    int myPrivateVariable;

    friend void myPrivateMethod(MyClass& myClassObject);

public:
    void setMyVariable(int x) {
        myPrivateVariable = x;
    }
};

void myPrivateMethod(MyClass& myClassObject) {
    std::cout << "The value of myPrivateVariable is: " << myClassObject.myPrivateVariable << std::endl;
}

int main() {
    MyClass myClassObject;
    myClassObject.setMyVariable(10);
    myPrivateMethod(myClassObject);
    return 0;
}
```

In this example, the private method `myPrivateMethod()` is declared as a friend function of the `MyClass` class. The method takes an object of the class as a reference argument and accesses the private instance variable `myPrivateVariable`. The method is then called directly from the `main()` function.

Both of these examples illustrate how to access an instance variable in a private method in C++.