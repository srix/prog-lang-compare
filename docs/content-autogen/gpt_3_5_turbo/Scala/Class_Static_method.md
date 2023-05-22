Sure! In Scala, static methods are called "singleton methods" and they can be defined using the `object` keyword. Here's an example:

```scala
object MyObject {
  def myMethod(): Unit = {
    println("Hello, world!")
  }
}
```

In this example, we define a singleton object `MyObject` with a single method called `myMethod`. This method doesn't take any arguments and simply prints out the string "Hello, world!" to the console.

Singleton methods, like regular instance methods, can take arguments and can return values. Here's an example of a singleton method that takes a string argument and returns a boolean value:

```scala
object MyObject {
  def isVowel(c: Char): Boolean = {
    val vowels = Set('a', 'e', 'i', 'o', 'u')
    vowels.contains(c.toLower)
  }
}
```

In this example, we define a singleton method called `isVowel` that takes a single character argument `c`. The method returns a boolean value indicating whether `c` is a vowel (ignoring case). The implementation uses a `Set` of vowels and the `contains` method to check whether `c` is in the set.

To call a singleton method, you simply prefix it with the name of the singleton object, like this:

```scala
MyObject.myMethod() // prints "Hello, world!"
MyObject.isVowel('a') // returns true
MyObject.isVowel('b') // returns false
```