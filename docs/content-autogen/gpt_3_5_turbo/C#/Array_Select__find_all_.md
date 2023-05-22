To find all elements of an array satisfying a condition in C#, you can use LINQ (Language Integrated Query). 

Here's an example:

Suppose you have an integer array that contains some numbers. Now, you want to find all the even numbers in this array. 

```csharp
int[] numbersArray = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; // integer array
var evenNumbers = numbersArray.Where(x => x % 2 == 0); // using LINQ to find even numbers
foreach (var number in evenNumbers)
{
    Console.WriteLine(number); // Output: 2 4 6 8 10
}
```

In the above example, we first created an integer array called `numbersArray`. Then using LINQ, we created another variable called `evenNumbers` which contains all the even numbers in the `numbersArray`. Here, we used the `Where` method which filters the elements of the `numbersArray` based on the given condition (i.e. the remainder of an element with 2 is 0). Finally, using a `foreach` loop, we printed all the elements of `evenNumbers`.

Similarly, you can apply any condition to filter the elements of an array using LINQ in C#.