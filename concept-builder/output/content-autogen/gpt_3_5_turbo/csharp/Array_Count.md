To count the number of elements in an array that match a condition in C#, you can use the `Count` method along with a lambda expression or a delegate.

Here is an example using a lambda expression to count the number of elements in an array of integers that are greater than 5:

```
int[] numbers = { 2, 6, 8, 3, 7, 1 };
int count = numbers.Count(n => n > 5);
Console.WriteLine(count); // Output: 3
```

In this example, the `Count` method is called on the `numbers` array and passed a lambda expression that checks if each element `n` is greater than 5. The `Count` method returns the number of elements that match the condition, which is 3 in this case.

Here is another example using a delegate to count the number of elements in an array of strings that start with the letter "A":

```
string[] names = { "Alice", "Bob", "Amy", "Alex", "Tom" };
int count = names.Count(name => name.StartsWith("A"));
Console.WriteLine(count); // Output: 2
```

In this example, the `Count` method is called on the `names` array and passed a delegate that invokes the `StartsWith` method to check if each element `name` starts with the letter "A". The `Count` method returns the number of elements that match the condition, which is 2 in this case.