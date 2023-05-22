In C#, a method or function is declared using the following syntax:

```
access-modifier return-type method-name (parameter-list)
{
    // statements
}
```

- Access-modifier: It specifies the accessibility of the method/function. There are several access modifiers in C# such as public, private, protected, internal, etc.
- Return-type: It specifies the data type of the value that the method/function returns. If a method/function doesn't return any value, the return type is void.
- Method-name: It specifies the name of the method/function.
- Parameter-list: It is a list of input parameters separated by commas, which are optional.

Here is an example of a simple method that returns the sum of two integers:

```
public int Add(int num1, int num2)
{
    int sum = num1 + num2;
    return sum;
}
```

This method takes two integer inputs and returns their sum. It is declared as a public method, and has a return type of integer.

Here is an example of a function that doesn't take any input parameters and doesn't return any value:

```
public void PrintHello()
{
   Console.WriteLine("Hello");
}
```

This function simply writes "Hello" to the console. It is declared as a public function and has a return type of void, indicating it doesn't return any value.