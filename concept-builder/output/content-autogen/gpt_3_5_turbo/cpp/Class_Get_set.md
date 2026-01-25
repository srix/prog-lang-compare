In C++, get/set are two methods that are used to control access to private class members. They are also known as accessors. 

Here is an example to explain how to use get/set in class in C++ :

```cpp
class Person{
private:
    std::string name;
public:
    void setName(std::string n){name=n;}
    std::string getName() const {return name;}
};
```

In this example, we have a class `Person` that contains a private member variable `name` and two public methods `setName` and `getName`. The `setName` method takes a parameter `n` and assigns it to `name` variable, while the `getName` method returns the `name` variable.

Now, suppose we want to set and get the name of a `Person` object. We can do it in the following way:

```cpp
Person p;
p.setName("John");
std::cout << "Name: " << p.getName() << std::endl;
```
In this code snippet, we create a `Person` object `p` and then set its name using the `setName` method. We can get the name by calling the `getName` method and displaying it on the console.

Using the get/set methods is a good practice while dealing with private class members. It provides a level of abstraction and allows us to control the access to variables in our class.