In Visual Basic .NET, a class can be declared using the keyword "Class". Here is an example of how to declare a simple class in VB.NET:

```
Public Class Student
   Public firstName As String
   Public lastName As String
   Public age As Integer
End Class
```

In the above example, we have declared a class called "Student" with three public variables: firstName, lastName, and age.

To create an instance of this class, we can use the "New" keyword as follows:

```
Dim student1 As New Student
student1.firstName = "John"
student1.lastName = "Doe"
student1.age = 18
```

Here, we have created a new instance of the Student class called "student1" and set its properties (firstName, lastName, and age) using dot notation.

We can also declare methods inside a class, for example:

```
Public Class Student
   Public firstName As String
   Public lastName As String
   Public age As Integer
   
   Public Sub PrintStudentInfo()
      Console.WriteLine("Name: " & firstName & " " & lastName)
      Console.WriteLine("Age: " & age)
   End Sub
End Class
```

In this example, we added a method called "PrintStudentInfo", which simply prints out the student's name and age using Console.WriteLine. We can call this method on our student instance like this:

```
Dim student1 As New Student
student1.firstName = "John"
student1.lastName = "Doe"
student1.age = 18

student1.PrintStudentInfo()
```

This will output:
```
Name: John Doe
Age: 18
```