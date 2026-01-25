In Kotlin, you can use reflection to check if a class has a method or not. Here's an example:

Suppose we have a class named `MyClass` with two methods:

```kotlin
class MyClass {
    fun method1() {
        println("This is method1")
    }
    
    fun method2() {
        println("This is method2")
    }
}
```

To check if this class has a method named `method1`, you can use the `declaredMethods` property of the `Class` object and the `find` method of the `Array` class as shown below:

```kotlin
val clazz = MyClass::class.java
val declaredMethods = clazz.declaredMethods

if (declaredMethods.find { it.name == "method1" } != null) {
    println("MyClass has method1")
} else {
    println("MyClass does not have method1")
}
```

The `declaredMethods` property returns an array of all the methods declared in the class. We use the `find` method to search for the method named `method1` in this array. If the method is found, `find` returns its `Method` object, which is non-null, and we print a message saying that the class has the method. Otherwise, the `find` method returns null, and we print a message saying that the class does not have the method.

Note that the `name` property of the `Method` object gives the name of the method.