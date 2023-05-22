In C#, you can use the `Aggregate` extension method to reduce an array to a single value. This method takes two parameters: the initial value and a lambda expression that represents the operation to be performed on each element of the array. 

Here's an example:

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
int sum = numbers.Aggregate((acc, num) => acc + num);
```

In this example, we start with an array of integers (`numbers`) and we want to find the sum of all its elements. We use `Aggregate` with an initial value of 0 and a lambda expression that adds each element of the array to the accumulator (`acc`). The final result is stored in the `sum` variable.

Another example would be to find the product of all the elements in an array:

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
int product = numbers.Aggregate((acc, num) => acc * num);
```

Here, we start with the same array but use a lambda expression that multiplies each element of the array with the accumulator (`acc`), which is initially set to 1. The final result is stored in the `product` variable. 

Note that the lambda expression used with `Aggregate` must take two parameters of the same type and return a value of that same type. The first parameter of the lambda expression is the accumulator, which stores the result of the previous operation, and the second parameter is the current element of the array to be operated on.