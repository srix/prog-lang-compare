In Groovy, we can call a method in a class by following these steps:

1. Create an instance of the class.
2. Call the method using the dot notation.

Here is an example:

```
class MyClass {
   def myMethod() {
      println "Hello, Groovy!"
   }
}

def obj1 = new MyClass()
obj1.myMethod()
```

In this example, we define a class `MyClass` with a method `myMethod()`. Then, we create an instance of the class `obj1` using the `new` keyword. Finally, we call the method `myMethod()` on the instance `obj1` using the dot notation (`obj1.myMethod()`). This will output "Hello, Groovy!" in the console.