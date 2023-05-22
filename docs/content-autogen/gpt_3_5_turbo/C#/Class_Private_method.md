In C#, a private method is a method that can be accessed only within the same class in which it is defined. It cannot be accessed from outside the class or from derived classes. Private methods are often used to encapsulate functionality that is not relevant outside the class or to avoid modifying class state from external code.

Here's an example:

```csharp
public class MyClass
{
    private void DoSomething()
    {
        // Some code here
    }

    public void DoPublicThing()
    {
        // This method can call the private DoSomething() method because it is defined in the same class.
        // Other classes cannot call it.
        DoSomething();
    }
}
```

In this example, the `DoSomething()` method is private and can only be called from within the `MyClass` class. The `DoPublicThing()` method is public and can be called from outside the class. However, it can also call the private `DoSomething()` method because it is defined in the same class.

Overall, private methods are useful for providing encapsulation and ensuring that only specific code can modify the state of a particular class.