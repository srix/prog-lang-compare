In C++, struct is a user-defined data structure that allows you to create a collection of related variables of different data types under a single name. Structs are like classes, but with default public member access and no member functions. Here is an example of how to declare and use a struct in C++:

```
// Declare a struct named Person
struct Person {
    int age;
    std::string name;
    float height;
};

// Declare a Person variable and set its values
Person john;
john.age = 26;
john.name = "John Doe";
john.height = 5.9;

// Declare an array of Person objects and set their values
Person people[3];
people[0].age = 24;
people[0].name = "Jane Smith";
people[0].height = 5.5;
people[1] = john; // Copy the values from john into people[1]
people[2] = { 32, "Bob Johnson", 6.1}; // Use initializer list to set values

// Output the values of john and people[0]
std::cout << john.name << " is " << john.age << " years old and " << john.height << " feet tall.\n";
std::cout << people[0].name << " is " << people[0].age << " years old and " << people[0].height << " feet tall.\n";
```

In this example, we declare a struct named Person that contains three variables: age, name, and height. We then declare a Person variable named john and set its values. We also declare an array of Person objects named people and set their values using various methods, including copying the values from john and using an initializer list. Finally, we output the values of john and people[0] using std::cout.