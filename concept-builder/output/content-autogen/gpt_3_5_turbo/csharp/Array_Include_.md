In C#, you can check if an array includes an element by using the Contains() method in the System.Linq namespace. Here's an example code snippet:

```csharp
using System.Linq;

int[] numbers = { 1, 2, 3, 4, 5 };
int target = 3;

bool containsTarget = numbers.Contains(target);

if (containsTarget)
{
    Console.WriteLine("The array contains the element " + target);
}
else
{
    Console.WriteLine("The array does not contain the element " + target);
}
```

In the above example, we have an integer array `numbers` with five elements and we want to check if it contains the element `target` which has a value of 3. We use the `Contains()` method to check for the presence of the target element in the array.

If the element is present, the result of the `Contains()` method will be true, and we print a message indicating that the array contains the element. If it's not present, the result of the `Contains()` method will be false, and we display a message indicating that the array does not contain the element.