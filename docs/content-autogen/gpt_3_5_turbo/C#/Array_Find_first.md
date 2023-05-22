To find the first element of an array in C#, you can use the `First()` method. This method returns the first element of a sequence or the first element that matches a specified condition.

Here's an example:

``` csharp
int[] numbers = { 1, 2, 3, 4, 5 };
int firstElement = numbers.First();
Console.WriteLine(firstElement);
```

This will output `1`, which is the first element in the `numbers` array.

If you want to find the first element that matches a condition, you can pass a lambda expression to the `First()` method. For example:

``` csharp
int[] numbers = { 1, 2, 3, 4, 5 };
int firstEven = numbers.First(num => num % 2 == 0);
Console.WriteLine(firstEven);
```

This will output `2`, which is the first even number in the `numbers` array. The lambda expression checks if the number is divisible by 2, and returns the first number that satisfies this condition. If no element in the array satisfies the condition, a `System.InvalidOperationException` is thrown.