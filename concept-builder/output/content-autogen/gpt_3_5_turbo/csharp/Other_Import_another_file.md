In C#, you can import another file, also known as a namespace, using the "using" keyword.

Here is an example:

If you have a file named "Example.cs" with the following namespace:

```
namespace MyNamespace
{
   class Example
   {
      public void SayHello()
      {
         Console.WriteLine("Hello from Example class!");
      }
   }
}
```

You can import this namespace into another file using the following code:

```
using MyNamespace;

class Program
{
   static void Main(string[] args)
   {
      Example example = new Example();
      example.SayHello();
   }
}
```

In the code above, we imported the namespace "MyNamespace" using the "using" keyword and then created an instance of the "Example" class within that namespace and called the "SayHello" method.

It's worth noting that you can also import specific classes within a namespace if you don't need all of them. Here's an example:

```
using MyNamespace.Example;

class Program
{
   static void Main(string[] args)
   {
      Example example = new Example();
      example.SayHello();
   }
}
```

In this example, we only imported the "Example" class within the "MyNamespace" namespace using the dot notation and then instantiated and used the class in the same way as before.