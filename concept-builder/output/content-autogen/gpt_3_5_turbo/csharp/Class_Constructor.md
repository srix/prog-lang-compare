A constructor in C# is a special method that is used to create an instance of a class. It initializes the properties and fields of the class when the object is created. Here is an example of how to use a constructor in C#:

```
class Car
{
    public string make;
    public string model;
    public int year;

    public Car(string make, string model, int year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
```

In this example, we created a class called 'Car' that has three properties: make, model, and year. We also created a constructor for the class that takes three parameters: make, model, and year.

When an object of the 'Car' class is created, the constructor is called automatically. For example:

```
Car myCar = new Car("Toyota", "Corolla", 2015);
```

In this example, we created an instance of the 'Car' class called 'myCar'. We passed in three arguments as parameters to the constructor: "Toyota" for the make, "Corolla" for the model, and 2015 for the year. 

The constructor then initializes the properties of the object with these values. This creates a new instance of the 'Car' class with its properties set to "Toyota", "Corolla", and 2015.