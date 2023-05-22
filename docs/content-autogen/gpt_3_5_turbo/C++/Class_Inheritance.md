Inheritance is a powerful mechanism through which a new class can be derived from an existing class. The new class, known as the derived class, inherits all the properties and methods of the existing class, known as the base class. This simplifies code reuse, and thus is a very important concept in object-oriented programming. In C++, inheritance is implemented using the ‘:’ operator.

Here is an example of how to use inheritance in C++:

```
class Animal {
public:
   void breathe(){
      cout<<"Breathing..."<<endl;
   }
   void eat(){
      cout<<"Eating..."<<endl;
   }
};

class Dog: public Animal{
public:
   void bark(){
      cout<<"Barking..."<<endl;
   }
};

int main(){
   Dog d;
   d.breathe(); // output: Breathing...
   d.eat();     // output: Eating...
   d.bark();    // output: Barking...
   return 0;
}
```

In this example, we have two classes; Animal and Dog. The class ‘Dog’ is inherited from the class ‘Animal’ using the ‘:’ operator. Now, class ‘Dog’ has access to all the members of class ‘Animal’. We have defined public members in both the classes. Hence, all the members are accessible outside the class.

In main(), we have created an object of class Dog and we can access the properties and methods of both base and derived classes using that object. We can notice that we are able to call the function 'breathe()' and 'eat()' from the derived class object even though they are defined in the base class.

This is just a basic example, but inheritance can be used for more complex scenarios, like creating different types of bank accounts that inherit from a single ‘Account’ class, or creating different types of vehicles that inherit from a ‘Vehicle’ class. Thus, it helps to organize code and makes it more manageable.