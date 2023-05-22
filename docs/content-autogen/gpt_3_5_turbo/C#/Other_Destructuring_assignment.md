Unfortunately, C# does not have a feature called "destructuring assignment". However, C# 7.0 introduced the deconstruction syntax that allows you to extract values from objects into variables in one line of code.

The deconstruction syntax works by creating a tuple-like expression that matches the shape of the object you wish to deconstruct. You can use the `var` keyword to declare a tuple of variables and assign their values at the same time.

Here is an example of using deconstruction syntax with a tuple:

```csharp
var tup = (1, 2);
var (x, y) = tup;
Console.WriteLine($"x: {x}, y: {y}"); // Output: x: 1, y: 2
```

In this example, we create a tuple called `tup` with two elements, `1` and `2`. Then we use deconstruction syntax to assign `x` to the first element of the tuple, which is `1`, and `y` to the second element, which is `2`. Finally, we print out the values of `x` and `y` using string interpolation.

You can also use the deconstruction syntax with custom types. For example, given the following `Person` class:

```csharp
class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
}
```

We can use deconstruction syntax to extract the `FirstName` and `LastName` properties into separate variables:

```csharp
Person person = new Person { FirstName = "Jane", LastName = "Doe" };
var (first, last) = person;
Console.WriteLine($"First name: {first}, Last name: {last}"); 
// Output: First name: Jane, Last name: Doe
```

In this example, we create a new `Person` object and set its `FirstName` and `LastName` properties. Then we use deconstruction syntax to assign `first` to the `FirstName` property, which is `"Jane"`, and `last` to the `LastName` property, which is `"Doe"`. Finally, we print out the values of `first` and `last` using string interpolation.

Note that for custom types, you need to define an implicit or explicit conversion to a tuple with suitable fields and property names, or you can customize your type's deconstruction logic by implementing an extension method.