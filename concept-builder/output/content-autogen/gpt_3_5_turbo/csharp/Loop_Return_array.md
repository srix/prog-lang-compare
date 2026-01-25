In C#, we can return an array from a method just like any other data type. We simply declare the return type as an array and initialize and populate it within the method before returning it. Here are some examples:

Example 1: Returning an integer array

```
public int[] GetIntArray()
{
    int[] intArray = new int[] { 1, 2, 3, 4, 5 };
    return intArray;
}

// Call the method and print the returned array
int[] myIntArray = GetIntArray();
foreach(int i in myIntArray)
{
    Console.WriteLine(i);
}
```

Output:
```
1
2
3
4
5
```

Example 2: Returning a string array

```
public string[] GetStringArray()
{
    string[] stringArray = new string[] { "apple", "orange", "banana" };
    return stringArray;
}

// Call the method and print the returned array
string[] myStringArray = GetStringArray();
foreach(string s in myStringArray)
{
    Console.WriteLine(s);
}
```

Output:
```
apple
orange
banana
```

Example 3: Returning a multidimensional array

```
public int[,] GetMultiDimensionalArray()
{
    int[,] multiArray = new int[,] { { 1, 2 }, { 3, 4 }, { 5, 6 } };
    return multiArray;
}

// Call the method and print the returned array
int[,] myMultiArray = GetMultiDimensionalArray();
for(int i = 0; i < myMultiArray.GetLength(0); i++)
{
    for(int j = 0; j < myMultiArray.GetLength(1); j++)
    {
        Console.Write(myMultiArray[i,j] + " ");
    }
    Console.WriteLine();
}
```

Output:
```
1 2 
3 4 
5 6
```