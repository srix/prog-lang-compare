In Kotlin, you declare classes using the `class` keyword followed by the class name. Here's an example of a basic class declaration in Kotlin: 

```kotlin
class Person {
    var name: String = ""
    var age: Int = 0
}
```
In this example, we just created a class named `Person` with two properties: `name` and `age`. The `var` keyword is used to declare variables that can be changed later.

Classes in Kotlin can also have constructor functions. Here's an example of a class with a constructor:

```kotlin
class Book(title: String, author: String) {
    var title = title
    var author = author
 
    fun getInfo(): String {
        return "Title: $title \nAuthor: $author"
    }
}
```
In this example, we declared a class `Book` with two constructor parameters `title` and `author`. We then assigned those parameters to `title` and `author` properties respectively. Also, we declared a function `getInfo` that will return a string representation of the `Book` object.

You can also declare a class as `data class` to create a class that is meant to hold data. Here's an example of a `data class` in Kotlin:

```kotlin
data class Person(val name: String, val age: Int)
```

In this example, we created a `data class` named `Person` with two properties - `name` as a `String` and `age` as an `Int`. The `val` keyword indicates that `name` and `age` are immutable and cannot be changed once set.

These are just a few examples of how to declare a class in Kotlin. Classes can have a lot more functionality in Kotlin, including inheritance, interfaces, and more.