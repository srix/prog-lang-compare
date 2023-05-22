To convert an integer to a float in Visual Basic .NET, you can use the CType function or the Convert.ToSingle method. Here are examples of each:

Using the CType function:

```
Dim i As Integer = 10
Dim f As Single = CType(i, Single)
```

In this example, the integer value of 10 is assigned to the variable i. The CType function is then used to convert i to a Single data type and assign the result to the variable f.

Using the Convert.ToSingle method:

```
Dim i As Integer = 10
Dim f As Single = Convert.ToSingle(i)
```

In this example, the integer value of 10 is assigned to the variable i. The Convert.ToSingle method is then used to convert i to a Single data type and assign the result to the variable f.

Both of these methods will result in the float value 10.0.