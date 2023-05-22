In Groovy, a struct is an object that contains named properties, much like a Java Map or Python dictionary. Structs are commonly used to represent configuration settings, data records, or small objects with simple data. Here is an example of how to use struct in Groovy:

```groovy
def person = [
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: true
]

println person.firstName // Output: John
println person.age // Output: 25

person.city = "New York" // Add a new property to the struct

println person.city // Output: New York
```

In this example, we define a person struct with four properties: firstName, lastName, age, and isStudent. We can access these properties using the dot notation, just like accessing object properties. We also add a new property to the struct after it has been defined by simply assigning a value to a new property, in this case, "city". 

We can also use structs as input to methods, as follows:

```groovy
def printPersonDetails(person) {
    println "Name: ${person.firstName} ${person.lastName}"
    println "Age: ${person.age}"
    if (person.isStudent) {
        println "Student"
    } else {
        println "Not a student"
    }
}
printPersonDetails(person) // Output: Name: John Doe, Age: 25, Student
```

Here, we define a method printPersonDetails that takes in a person struct as input and prints out its properties. We can pass the previously defined person struct to this method as input, and it will process it accordingly. 

Overall, using structs in Groovy can make code clearer and easier to read, especially when dealing with simple data structures. Additionally, structs are mutable, so they can be updated and modified at runtime.