In C#, a static method is one that belongs to the class rather than to a specific instance of the class. It can be called on the class itself, rather than on an object created from the class.

To define a static method in C#, you use the "static" keyword in the method declaration. Here's an example:

```
public class MyClass
{
    public static int AddNumbers(int num1, int num2)
    {
        return num1 + num2;
    }
}
```

In this example, we've defined a static method called "AddNumbers" in the "MyClass" class. It takes two integer parameters, "num1" and "num2", and returns their sum.

To call this method, you would use the class name, followed by the method name, like this:

```
int result = MyClass.AddNumbers(5, 7);
```

This would call the "AddNumbers" method on the "MyClass" class, passing in the values 5 and 7 as arguments. The result would be 12, which in this example is assigned to the "result" variable.