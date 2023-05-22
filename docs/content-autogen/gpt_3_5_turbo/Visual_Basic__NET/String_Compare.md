In Visual Basic .NET, you can compare strings using the following methods:

1. Using the "=" operator:
The "=" operator compares two strings for exact equality. For example:

```
Dim str1 As String = "hello"
Dim str2 As String = "hello"
If str1 = str2 Then
    MessageBox.Show("The strings are equal")
End If
```

2. Using the "String.Compare" method:
The "String.Compare" method compares two strings and returns an integer value indicating whether one string is less than, equal to, or greater than the other. For example:

```
Dim str1 As String = "apple"
Dim str2 As String = "banana"
Dim result As Integer = String.Compare(str1, str2)
If result = 0 Then
    MessageBox.Show("The strings are equal")
ElseIf result < 0 Then
    MessageBox.Show("str1 is less than str2")
ElseIf result > 0 Then
    MessageBox.Show("str1 is greater than str2")
End If
```

3. Using the "String.Equals" method:
The "String.Equals" method compares two strings and returns a Boolean value indicating whether they are equal or not. This method also allows you to specify a comparison type (such as case-insensitive or culture-specific). For example:

```
Dim str1 As String = "HELLO"
Dim str2 As String = "hello"
If str1.Equals(str2, StringComparison.CurrentCultureIgnoreCase) Then
    MessageBox.Show("The strings are equal")
End If
```

Note: It's important to keep in mind that string comparisons are culture-sensitive. Therefore, it's usually recommended to use the appropriate comparison method for your specific scenario.