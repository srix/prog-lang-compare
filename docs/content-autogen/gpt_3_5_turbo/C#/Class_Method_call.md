In C#, methods are actions that can be performed on an object or its data. Here's how to call a method in a class in C# with examples:

Suppose you have a class named 'Person' with a method called 'SayHello'. The 'SayHello' method takes no arguments and returns a string.

```csharp
public class Person
{
    public string SayHello()
    {
        return "Hello!";
    }
}
```

To call the 'SayHello' method, create an instance of the 'Person' class and call the method on the instance:

```csharp
Person person = new Person();
string greeting = person.SayHello(); // "Hello!"
```

In this example, `person` is an instance of `Person`, created using the `new` operator. The method call on `person` is made using the `.` operator, passing the results to the variable `greeting`. The result of the `SayHello` method execution is the string "Hello!".

You can also call the method directly on the class without creating an instance, if the method is marked as `static`.

```csharp
public class Person
{
    public static string SayHello()
    {
        return "Hello!";
    }
}
```

Calling the `SayHello` method on the `Person` class directly:

```csharp
string greeting = Person.SayHello(); // "Hello!"
```

Here, since the `SayHello` method is marked as `static`, we don't need to create an instance of the `Person` class. Instead, we call the method on the class itself using the `.` operator.