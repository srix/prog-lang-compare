In C++, a private method in a class can only be called within the scope of that class. It is not accessible to the objects of that class or functions outside the class. It is used to encapsulate functionality that is not intended to be used outside the class or to prevent manipulation of object's state outside the control of the class.

Here's an example of how to use private method in C++:

```c++
#include<iostream>
using namespace std;

class Example{
   private:
      int privateData; //private variable
      void privateMethod(){ //private method
         cout<<"This is a private method"<<endl;
      }

   public:
      void accessPrivateData(){
         privateData = 10; //accessing private data within class
         cout<<"Private data: "<< privateData <<endl;
      }
};

int main(){
   Example exObject;
   exObject.accessPrivateData(); //calling public method
   //exObject.privateMethod(); //private method can't be accessed outside the class
   return 0;
}
```

In this example, we have a class `Example` with a private variable `privateData` and a private method `privateMethod()`. The `accessPrivateData()` method is a public method that accesses the private variable `privateData` within the class.

However, we cannot access the private method `privateMethod()` outside the class. If we try to call `exObject.privateMethod()` outside the class, we will get an error.

So, we use private methods to control access to certain functionalities within the class and prevent unwanted manipulations of object state from outside the class.