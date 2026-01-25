Inheritance is a mechanism in Kotlin that allows a class to inherit properties and behaviors from another class. This helps to reduce code duplication and makes the code more manageable. To use inheritance in classes in Kotlin, we use the `: (colon)` symbol followed by the name of the parent class.

Here is an example of inheritance in Kotlin:

```
open class Animal {
    open fun makeSound() {
        println("The animal is making a sound")
    }
}

class Dog : Animal() {
    override fun makeSound() {
        println("The dog is barking")
    }
}
```

In this example, we have two classes - `Animal` and `Dog`. The `Animal` class is the parent class and `Dog` is the child class. The `Dog` class inherits properties and methods from the `Animal` class using the `:` symbol.

The `Animal` class has a single method `makeSound` which is marked as `open`. The `open` keyword indicates that this method can be overridden in child classes. 

The `Dog` class overrides the `makeSound` method and prints 'The dog is barking' instead of the generic 'The animal is making a sound'.

This is a simple example, but inheritance in Kotlin can be used for more complicated scenarios with many levels of inheritance.