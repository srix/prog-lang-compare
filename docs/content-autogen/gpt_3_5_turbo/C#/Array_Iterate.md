Sure! In C#, arrays can be iterated over using different constructs such as for loop, for each loop, while loop, do-while loop and so on. Here are some examples of iterating over an array in C#:

1. Using a for loop:
```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
for(int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
```

2. Using a foreach loop:
```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
foreach(int num in numbers)
{
    Console.WriteLine(num);
}
```

3. Using a while loop:
```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
int i = 0;
while (i < numbers.Length)
{
    Console.WriteLine(numbers[i]);
    i++;
}
```

4. Using a do-while loop:
```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
int i = 0;
do 
{
    Console.WriteLine(numbers[i]);
    i++;
} while (i < numbers.Length);
```

All these constructs can be used to iterate over an array in C#.