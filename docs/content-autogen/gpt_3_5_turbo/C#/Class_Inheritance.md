In C#, inheritance allows us to create a new class that is a modified version of an existing class. The new class is called the derived class, and the existing class is called the base class. The derived class inherits all the methods, properties, and fields of the base class, and can also add new methods and properties of its own.

To use inheritance in C#, we define a new class that derives from an existing class. We use the ":" symbol to indicate that a new class is derived from an existing class. Here is an example:

```
public class Vehicle
{
    public string Brand { get; set; }
    public int Year { get; set; }
    public virtual void Drive()
    {
        Console.WriteLine("Driving...");
    }
}

public class Car : Vehicle
{
    public string Model { get; set; }
    public override void Drive()
    {
        Console.WriteLine("Driving a car...");
    }
}
```

In this example, we have a base class called "Vehicle" that has two properties, Brand and Year, and a virtual method called "Drive". We also have a derived class called "Car" that adds a new property called "Model" and overrides the "Drive" method.

To create an object of the Car class and call its methods, we can do the following:

```
Car car = new Car();
car.Brand = "Ford";
car.Year = 2018;
car.Model = "Mustang";
car.Drive();
```

This will output "Driving a car..." to the console, because the overridden "Drive" method in the Car class is called.

In summary, inheritance in C# allows us to create new classes that are modified versions of existing classes, by inheriting all their methods, properties, and fields. We use the ":" symbol to indicate that a new class is derived from an existing class. We can add new methods and properties to the derived class, and override existing methods if we need to.