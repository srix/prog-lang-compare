Inheritance is one of the important features of object-oriented programming that enables a class to derive properties and behavior from another class. In Scala, you can create an extended class by using the “extends” keyword.

Here is an example of how to use inheritance in Scala:

```
class Person(name: String, age: Int) {
  def details = s"Name: $name, Age: $age"
}

class Student(name: String, age: Int, course: String) extends Person(name, age) {
  def studentInfo = s"Name: $name, Age: $age, Course: $course"
}
```

In this example, we defined a Person class, which has two parameters: name and age. We also defined a method called “details” which returns the name and age of the person.

We then created another class called Student, which extends the Person class. The Student class also has another parameter called course, which is not part of the Person class. The Student class also has a method called “studentInfo” which returns the name, age, and course of the student.

Now when we create an object of the Student class, we can access the details and studentInfo methods, which were inherited from the Person and Student classes, respectively.

```
val john = new Student("John Smith", 20, "Computer Science")
println(john.details) // prints "Name: John Smith, Age: 20"
println(john.studentInfo) // prints "Name: John Smith, Age: 20, Course: Computer Science"
```

In this example, we created an object of the Student class and stored it in a variable called “john”. We then used the details and studentInfo methods to print the details of the student. Since the Student class extends the Person class, the student object has access to both the details method of the Person class and the studentInfo method of the Student class.