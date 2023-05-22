Sure! In Groovy, a static method is defined using the `static` keyword in front of the method definition. Here's an example:

```groovy
class MyClass {
    static void myStaticMethod() {
        println "This is a static method."
    }
}
```

In the example above, we define a class `MyClass` with a static method `myStaticMethod`. When you call the `myStaticMethod` method, it will always belong to the class and not the instance of the class. Here's how you would call it:

```groovy
MyClass.myStaticMethod()
```

When you call a static method, you don't need to create an instance of the class. Instead, you call it directly on the class name itself.

Let me know if you have any further questions!