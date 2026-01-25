In Visual Basic .NET, you can create an array with different data types using the "Object" data type. Here's an example:

```
Dim myArray(4) As Object
myArray(0) = "Hello"
myArray(1) = 123
myArray(2) = True
myArray(3) = 3.14
myArray(4) = New Date(2020, 10, 1)
```

In this example, we create an array called "myArray" with 5 elements, each assigned a different data type: a string, an integer, a boolean, a double, and a date.

You can also use the "Var" keyword to create an array with different data types, like this:

```
Dim myArray() = { "Hello", 123, True, 3.14, New Date(2020, 10, 1) }
```

In this example, we create an array called "myArray" and initialize it with values of different data types. The compiler will infer the type of the array as "Object".