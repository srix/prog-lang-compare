In C#, the `GetType()` method is used to get the type of an object. Here is an example:

```
string myString = "Hello World";
Type type = myString.GetType();
Console.WriteLine(type.FullName);
```

In this example, the `GetType()` method is called on the `myString` object to get its type. The `FullName` property of the `Type` object is then printed to the console, which will output `System.String`.

Here's another example:

```
int myInt = 42;
Type type = myInt.GetType();
Console.WriteLine(type.FullName);
```

In this example, the `GetType()` method is called on an `int` object to get its type. The output to the console will be `System.Int32`.

It's important to note that the `GetType()` method can also be used on variables of any type, including user-defined types.