In C#, a method or function can return a value using the `return` statement. Here is an example:

```
public int Add(int a, int b) {
    int sum = a + b;
    return sum;
}
```

In the above example, the `Add()` method takes two integers as arguments and returns their sum. The `return` statement is used to return the value of `sum` back to the calling statement.

Here is another example that returns a string:

```
public string Greet(string name) {
    string message = "Hello, " + name + "!";
    return message;
}
```

In this example, the `Greet()` method takes a string argument `name` and returns a personalized greeting. The `return` statement is used to return the value of `message` back to the calling statement.

To use the returned value, you need to call the method and assign its return value to a variable. Here is an example:

```
int result = Add(3, 5);
string greeting = Greet("John");

Console.WriteLine(result); // Output: 8
Console.WriteLine(greeting); // Output: Hello, John!
```

In the above example, the `Add()` method is called with arguments `3` and `5`, and its return value of `8` is assigned to the variable `result`. The `Greet()` method is called with the argument `"John"`, and its return value of `"Hello, John!"` is assigned to the variable `greeting`.