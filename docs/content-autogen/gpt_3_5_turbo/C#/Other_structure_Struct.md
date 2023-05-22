Structs in C# allow you to create custom data types that can contain variables of different data types. They are similar to classes, but they are value types rather than reference types.

To define a struct:

```
struct Car
{
    public string make;
    public string model;
    public int year;
}
```

Here, we have defined a struct called "Car" with three variables: make (a string), model (a string), and year (an integer).

We can then create instances of the struct and set their values like this:

```
Car myCar = new Car();
myCar.make = "Toyota";
myCar.model = "Camry";
myCar.year = 2022;
```

We can also define struct constructors, methods, and properties, just like with classes. Here is an example of a struct with a constructor:

```
struct Person
{
    public string name;
    public int age;

    public Person(string _name, int _age)
    {
        name = _name;
        age = _age;
    }
}
```

We can then create instances of this struct using the constructor, like this:

```
Person person1 = new Person("Alice", 25);
Person person2 = new Person("Bob", 30);
```

Overall, structs in C# are a useful tool for creating custom data types that are lightweight and efficient. They can be used in a variety of contexts, such as representing data structures or encapsulating related variables.