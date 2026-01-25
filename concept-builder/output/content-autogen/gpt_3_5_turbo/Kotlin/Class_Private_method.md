In Kotlin, a private method is a method that can only be accessed within the same class that it is declared in. You can declare a private method by using the `private` modifier.

Here is an example:

```kotlin
class MyClass {
   private fun myPrivateMethod() {
      // Code to be executed
   }

   fun myPublicMethod() {
      myPrivateMethod()
   }
}

fun main() {
   val obj = MyClass()
   obj.myPublicMethod()
}
```

In this example, `myPrivateMethod()` is a private function that can only be accessed within the `MyClass` class. It performs some specific operation. The public method `myPublicMethod()` can be accessed from outside the class and it calls the private method `myPrivateMethod()` internally.

When you call `obj.myPublicMethod()`, it internally calls the private method `myPrivateMethod()` which is within the same class. This is how you can make use of private methods in Kotlin.