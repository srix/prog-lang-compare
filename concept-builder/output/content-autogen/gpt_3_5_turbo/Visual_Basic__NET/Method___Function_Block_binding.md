In Visual Basic .NET, block binding allows you to declare variables within a code block and limit their scope to that particular block. This means that any variable declared within a block can only be accessed within that block and its nested blocks. Here's an example to demonstrate the usage of block binding in Visual Basic .NET:

```
Public Sub Example()
  'Declare a variable outside of a block
  Dim name as String = "John"
  
  'Block 1
  If condition = True Then
    'Declare a variable within Block 1
    Dim age as Integer = 30
    
    'Access the variable name declared outside of Block 1
    Console.WriteLine(name)
    
    'Nested Block within Block 1
    If condition2 = True Then
      'Declare a variable within the nested Block
      Dim city as String = "New York"
      
      'Access both the variables declared outside and within the Block
      Console.WriteLine(name & " is " & age & " years old and lives in " & city)
    End If
  End If
  
  'Access the variable name declared outside of Block 1
  Console.WriteLine(name)
  
  'You can't access either of the variables age and city declared inside Block 1 and its nested block here as they are out of scope.
End Sub
```

In this example, the variable `name` is defined outside of the block and hence is accessible throughout the code. However, the variables `age` and `city` are declared within separate blocks and hence cannot be accessed outside of those blocks.

By using block binding, you can limit the scope of variables and reduce the risk of naming conflicts and bugs due to accidentally accessing or modifying the wrong variable.