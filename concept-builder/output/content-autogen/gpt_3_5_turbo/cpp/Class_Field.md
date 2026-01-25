In C++, a field is a data member of a class that can hold the state or attributes of an object of that class. Fields are declared within the class definition, and can have different access levels (public, private, or protected) which determine the visibility of the field outside the class.

Here's an example of how to declare and use fields in a class in C++:

``` c++
class Person {
public:
    string name;     // a public field

private:
    int age;         // a private field

public:
    void setAge(int newAge) {
        age = newAge;
    }

    void printDetails() {
        cout << "Name: " << name << "\n";
        cout << "Age: " << age << "\n";
    }
};
```

In this example, we have a `Person` class with two fields - `name` and `age`. `name` is declared as a public field, which means it can be accessed from outside the class. `age` is a private field, which means it can only be accessed from within the class.

The class also has two methods - `setAge()` and `printDetails()`. `setAge()` is a public method that allows us to modify the value of the `age` field. `printDetails()` is also a public method, and it prints out the values of both fields.

To use this class, we can create an object of type `Person` and set its fields:

``` c++
Person john;
john.name = "John";     // set the name field directly
john.setAge(30);        // call the setAge() method to set the age field
```

We can then call the `printDetails()` method to print out the values of both fields:

``` c++
john.printDetails();    // prints "Name: John\nAge: 30\n"
``` 

Note that we were able to access the `name` field directly since it was declared as a public field. However, we had to use the `setAge()` method to modify the `age` field, since it was declared as a private field.