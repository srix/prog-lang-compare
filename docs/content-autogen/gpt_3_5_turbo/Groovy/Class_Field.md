In Groovy, a class is a container that encapsulates the definition of objects, their data, and the methods that operate on that data. A class can have properties or fields which are data members that represent the state of an object. Here's how to use fields in a class in Groovy with examples:

Example 1:

```groovy
class Person {
    String name
    int age
    String occupation
}

def person1 = new Person(name: 'John', age: 25, occupation: 'Engineer')
println person1.name // output: John
println person1.age // output: 25
println person1.occupation // output: Engineer

def person2 = new Person(name: 'Jane', occupation: 'Doctor')
person2.age = 30
println person2.name // output: Jane
println person2.age // output: 30
println person2.occupation // output: Doctor
```

In this example, we defined a class named `Person` with three fields `name`, `age`, and `occupation`. We created two objects of the `Person` class `person1` and `person2`. We set the values of `name`, `age`, and `occupation` fields for `person1`, and only `name` and `occupation` fields for `person2`. We accessed the values of the fields using the dot notation.

Example 2:

```groovy
class Rectangle {
    def length
    def width
    
    def area(){
        length * width
    }
}

def rectangle1 = new Rectangle(length: 5, width: 10)
println rectangle1.area() // output: 50

def rectangle2 = new Rectangle()
rectangle2.length = 8
rectangle2.width = 12
println rectangle2.area() // output: 96
```

In this example, we defined a class named `Rectangle` with two fields `length` and `width`. We defined a method named `area()` that returns the area of the rectangle. We created two objects of the `Rectangle` class `rectangle1` and `rectangle2`. We set the values of `length` and `width` fields for `rectangle1` using the constructor, and `length` and `width` fields for `rectangle2` using the dot notation. We called the `area()` method using the dot notation.

Fields are an essential part of a class in Groovy as they represent the state of the objects. We can set and get their values using the dot notation.