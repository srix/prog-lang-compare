In Visual Basic .NET, you can check if a class has a method by using the GetType() method and the GetMethod() method. The GetType() method is used to get the type of the class, and the GetMethod() method is used to get the method information from the class.

Here is an example code to check if a class has a method in Visual Basic .NET:

```
Class Person
    Public Sub PrintName()
        Console.WriteLine("John")
    End Sub
End Class

Dim myPerson As Person = New Person()
Dim myMethodInfo = myPerson.GetType().GetMethod("PrintName")

If myMethodInfo IsNot Nothing Then
    Console.WriteLine("The method 'PrintName' exists in the Person class")
Else
    Console.WriteLine("The method 'PrintName' does not exist in the Person class")
End If
```
In this example, we define a class called Person with a single method PrintName() that simply prints the name "John" to the console. We then create an instance of the Person class called myPerson, and we use the GetType() method to get the type of myPerson. We then use the GetMethod() method to get the method information for the PrintName() method in the Person class.

We then check if the method information returned by the GetMethod() method is not null. If it's not null, we print a message that the method exists in the Person class. If it's null, we print a message that the method does not exist in the Person class. This is how we can check if a class has a method in Visual Basic .NET using GetType() and GetMethod().