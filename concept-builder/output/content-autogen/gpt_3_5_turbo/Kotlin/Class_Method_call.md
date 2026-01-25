Sure, I can help you with that!

In Kotlin, we can call a method in a class by creating an instance of the class and then calling the method using dot notation. Let's take an example to understand this better:

Suppose we have a class named `Person` with two properties `name` and `age` and a method `sayHello()`, which simply prints a greeting message. Here's how the class definition will look like:

```kotlin
class Person(var name: String, var age: Int) {

   fun sayHello() {
       println("Hello, my name is $name and I am $age years old.")
   }
}
```

Now, to call the `sayHello()` method on a `Person` object, we first need to create an instance of the `Person` class. We can do that by calling the constructor and passing the required parameters:

```kotlin
val person = Person("John", 25)
```

Here, we created a `Person` object with name "John" and age 25 and assigned it to a variable named `person`.

Now, we can call the `sayHello()` method on this object using dot notation like this:

```kotlin
person.sayHello()
```

This will print the message "Hello, my name is John and I am 25 years old." to the console.

I hope this helps! Let me know if you have any further questions.