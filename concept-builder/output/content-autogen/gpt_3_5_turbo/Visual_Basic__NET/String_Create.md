To create a string in Visual Basic .NET, you simply need to enclose your text inside double quotes. Here's an example:

```
Dim myString As String = "Hello, World!"
```

In this example, we've created a variable called `myString` and assigned it the value of "Hello, World!".

You can also concatenate two or more strings together using the `&` operator. Here's an example:

```
Dim firstName As String = "John"
Dim lastName As String = "Doe"
Dim fullName As String = firstName & " " & lastName
```

In this example, we've concatenated the `firstName` and `lastName` variables together with a space in between to create the `fullName` variable.

You can also use string interpolation to insert variable values into a string. Here's an example:

```
Dim name As String = "John"
Dim age As Integer = 30
Dim message As String = $"{name} is {age} years old."
```

In this example, we've used string interpolation to create the `message` variable, which includes the value of the `name` and `age` variables. The `$` symbol followed by curly braces `{ }` is used to enclose the variable names inside the string.

These are just a few examples of how to create strings in Visual Basic .NET. There are many other string-related functions and operations available, so it's worth exploring the documentation to see what else you can do.