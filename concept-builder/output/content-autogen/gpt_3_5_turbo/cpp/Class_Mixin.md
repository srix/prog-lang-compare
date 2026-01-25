Mixins in C++ are a way of combining separate classes to create a new class that inherits all their functionality. The idea behind mixins is to reuse code in multiple classes without using inheritance, which reduces code duplication and improves code maintainability.

Here is an example of how to use mixins in C++:

```c++
// Create a simple class that defines a method
class Printable {
public:
    virtual void print() = 0;
};

// Create a second class that defines a method for adding values
class Addable {
public:
    virtual int add(int a, int b) = 0;
};

// Create a class that combines both the above classes to create a new class with both functionalities
class PrintableAndAddable : public Printable, public Addable {
public:
    void print() {
        std::cout << "Printing...." << std::endl;
    }

    int add(int a, int b) {
        return a + b;
    }
};

// Usage example
int main() {
    PrintableAndAddable p;
    p.print(); // Prints "Printing...."
    int result = p.add(3, 4); // result = 7
    return 0;
}
```

In the above example, the `Printable` and `Addable` classes define a single method each, and the `PrintableAndAddable` class derives from both. 

This is just a simple example, mix-ins can be used in much more complex scenarios, for instance, instead of deriving from a base class, a class can use a mix-in to enhance its functionality without actually inheriting from a specific basis class.