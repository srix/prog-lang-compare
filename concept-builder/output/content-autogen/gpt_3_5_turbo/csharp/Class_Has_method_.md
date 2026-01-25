In C#, you can check if a class has a method by using the Reflection API. Here are the steps to do it:

1. Get the Type object of the class: You can do this by using the typeof operator followed by the class name.

```
Type classType = typeof(MyClass);
```

2. Use the GetMethod method of the Type object to get the MethodInfo object representing the method you are looking for. You need to pass the name of the method and its signature, which includes the parameter types.

```
MethodInfo methodInfo = classType.GetMethod("MyMethod", new Type[] { typeof(int), typeof(string) });
```

3. Check if the MethodInfo object is null. If it is, then the class does not have the method you were looking for. If it is not null, then the method exists.

```
if (methodInfo != null)
{
    // The method exists
}
else
{
    // The method does not exist
}
```

Here is an example that checks if the MyClass class has a method called "DoSomething" that takes an int parameter and returns a string:

```
using System;
using System.Reflection;

class MyClass
{
    public string DoSomething(int x)
    {
        return "result";
    }
}

class Program
{
    static void Main(string[] args)
    {
        Type classType = typeof(MyClass);
        MethodInfo methodInfo = classType.GetMethod("DoSomething", new Type[] { typeof(int) });

        if (methodInfo != null)
        {
            Console.WriteLine("The method exists");
        }
        else
        {
            Console.WriteLine("The method does not exist");
        }
    }
}
```

The output of this program will be "The method exists".