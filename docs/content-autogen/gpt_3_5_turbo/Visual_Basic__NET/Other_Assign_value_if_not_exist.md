In Visual Basic .NET, you can use the conditional operator `If` to assign a value to a variable if it does not already exist.

Here is an example code:

```
Dim x As Integer
If x = Nothing Then
    x = 10
End If
```

In this example, we declare a variable `x` of type `Integer`. If `x` does not have a value assigned to it yet, which is determined by the `x = Nothing` check, then we assign a value of `10` to it.

Alternatively, you can use a shorthand notation, the null-coalescing operator `??`, to achieve the same result with less code:

```
Dim y As Integer = 0
Dim z As Integer = If(y, 10)
```

In this example, we declare a variable `y` and set its value to `0`. We then assign `z` to the result of `If(y, 10)`, which will be `10` since `y` is not `Nothing`. If `y` was `Nothing`, then `z` would be assigned the value of `0` since `0` is considered false.