In C#, the "this" keyword refers to the current instance of the class. It is used to differentiate between class-level variables and parameters in a method. The "that" keyword, however, is not a keyword in C# and cannot be used. 

Here's an example of how to use "this" in C#:

```csharp
class Student {
   public string name;
   
   public Student(string name) {
      this.name = name; // using "this" to assign the name parameter to the class-level name variable
   }
}
```

In this example, we create a class called "Student" with a public string variable called "name". We also create a constructor that takes a string parameter called "name" and assigns it to the "name" variable using the "this" keyword.

Again, there is no "that" keyword in C#, so it cannot be used in a similar manner.