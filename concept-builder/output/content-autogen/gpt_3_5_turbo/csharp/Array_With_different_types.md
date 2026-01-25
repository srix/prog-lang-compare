In C#, we can define an array with different types using the "object" type. This is because "object" is the base type for all types in C#, and so an array of objects can hold elements of any type. Here is an example:

```csharp
object[] myArray = new object[3];
myArray[0] = "Hello world";
myArray[1] = 42;
myArray[2] = true;
```

In the above example, we have defined an array of objects with a size of 3. We then assigned a string, an int, and a boolean value to each of the array elements. Since each of these values is of a different type, we must use the "object" type to create the array.

Another example:

```csharp
object[] mixedArray = { "String", 123, true, 5.6f };
```

In this example, we have defined an array of objects and assigned values of different types to each element during initialization. We have a string, an integer, a boolean, and a float value in the array.

When accessing elements in this type of array, we must cast the elements back to their original type. For example:

```csharp
string myString = (string)myArray[0];
int myInt = (int)myArray[1];
bool myBool = (bool)myArray[2];
``` 

In summary, arrays with different types can be created using the "object" type in C#.