In C#, methods and functions can be initialized at runtime using delegates. Delegates are an object-oriented way of creating function pointers which allow you to pass a method as an argument and execute it later. Here is an example of initializing a method at runtime:

```
public class Example {
    // Define a delegate that takes two integer arguments and returns an int
    public delegate int MyDelegate(int x, int y);
    
    public static int Add(int x, int y) {
        return x + y;
    }
    
    static void Main(string[] args) {
        // Initialize a delegate instance that points to the Add method
        MyDelegate myDelegate = new MyDelegate(Add);
        
        // Call the Add method through the delegate
        int result = myDelegate(1, 2);
        Console.WriteLine(result); // Output: 3
    }
}
```

In this example, we define a delegate called `MyDelegate` that takes two integer arguments and returns an int. We also define a static method called `Add` that takes two integers and adds them together. 

In `Main`, we instantiate a `MyDelegate` instance called `myDelegate` that points to the `Add` method using the constructor. We can then call the `Add` method through the delegate using the same syntax as calling a method directly. The result is stored in a variable `result` and output to the console.

Another way to initialize a method at runtime is with a lambda expression. Here is an example:

```
public class Example {
    // Define a delegate that takes two integer arguments and returns an int
    public delegate int MyDelegate(int x, int y);
    
    static void Main(string[] args) {
        // Initialize a delegate instance with a lambda expression
        MyDelegate myDelegate = (x, y) => x + y;
        
        // Call the lambda expression through the delegate
        int result = myDelegate(1, 2);
        Console.WriteLine(result); // Output: 3
    }
}
```

In this example, we use a lambda expression to initialize the `myDelegate` instance instead of passing in the `Add` method explicitly. The lambda expression takes two integer arguments `x` and `y`, adds them together, and returns the result. We can then call the lambda expression through the delegate and output the result to the console as before.