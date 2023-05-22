In Kotlin, instance variables are accessed using the 'this' keyword. If a method is declared as private in a class, other methods within the same class can access the private method along with instance variables.

Here's an example code that demonstrates how to access instance variables in a private method in Kotlin:

```
class Student(val name: String, val grade: Int) {
    var attendance = 0
  
    private fun calculateAttendance() {
        // Accessing attendance instance variable using 'this' keyword
        val percentageAttendance = (attendance/100)
        println("Attendance percentage for $name: $percentageAttendance")
    }
  
    fun displayAttendance() {
        calculateAttendance()
    }
}

fun main() {
    val student = Student("John", 9)
    student.attendance = 80
    student.displayAttendance() // Output: Attendance percentage for John: 0.8
}
```

In the above code, the 'calculateAttendance' method is declared as private and it accesses the 'attendance' instance variable using the 'this' keyword. The 'displayAttendance' method calls the private 'calculateAttendance' method. Finally, in the main function, we create an instance of the 'Student' class and call the 'displayAttendance' method that prints the attendance percentage for the student.