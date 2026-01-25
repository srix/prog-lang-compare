Converting a string to an integer is a common programming task. In Visual Basic .NET, this can be done using the `CInt` function. Here is an example of how to use it:

```vb
Dim strNum as String = "42"
Dim intNum as Integer = CInt(strNum)
```

In the example above, we declare a variable `strNum` and assign it the value "42". We then declare another variable `intNum` and use the `CInt` function to convert the string value into an integer value.

If the string cannot be converted to an integer, a runtime error will occur. For example:

```vb
Dim strNum as String = "hello"
Dim intNum as Integer = CInt(strNum)
```

The code above will result in a runtime error since "hello" cannot be converted to an integer.

Another way to convert a string to an integer is to use the `Integer.Parse` method. Here's an example:

```vb
Dim strNum as String = "42"
Dim intNum as Integer = Integer.Parse(strNum)
```

Both methods are valid, but it is important to note that `CInt` is a function while `Integer.Parse` is a method.