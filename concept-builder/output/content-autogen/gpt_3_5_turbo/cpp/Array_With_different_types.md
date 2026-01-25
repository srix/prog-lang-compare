In C++, it is possible to create an array with different types, also known as a heterogeneous array. To do so, we can use a structure or a class to represent the elements of the array and then create an array of those structures or classes.

Here's an example using a structure:

```c++
struct Item {
    int id;
    std::string name;
    double price;
};

int main() {
    Item items[] = {
        {1, "item1", 10.99},
        {2, "item2", 5.99},
        {3, "item3", 20.50}
    };
    
    // accessing elements:
    std::cout << "First item: " << items[0].name << std::endl;
    std::cout << "Second item price: " << items[1].price << std::endl;
    
    return 0;
}
```

In this example, we define a `struct Item` that has an `int`, a `std::string`, and a `double`. We then create an array of `Item`s and initialize it with some values. Later, we access the elements of the array using their index.

Here's another example using a class:

```c++
class Person {
public:
    std::string name;
    int age;
    bool isEmployed;
    
    Person(std::string n, int a, bool ie) {
        name = n;
        age = a;
        isEmployed = ie;
    }
};

int main() {
    Person people[] = {
        {"John", 30, true},
        {"Jane", 25, false},
        {"Bob", 50, true}
    };
    
    // accessing elements:
    std::cout << "Second person name: " << people[1].name << std::endl;
    std::cout << "Third person age: " << people[2].age << std::endl;
    
    return 0;
}
```

In this example, we define a `class Person` that has a `std::string`, an `int`, and a `bool`. We then create an array of `Person`s and initialize it with some values using a constructor. Later, we access the elements of the array using their index.