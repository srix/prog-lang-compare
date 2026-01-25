Sure! A static method in Java means that the method belongs to the class and not to the objects of that class. Here's how you define a static method in Java 20:

```java
public class MyClass {
    // defining a static method
    public static void myStaticMethod() {
        System.out.println("This is a static method!");
    }
}
```

In the example above, we have defined a static method named `myStaticMethod()`. Here's how you can call this method from another class:

```java
public class SecondClass {
    public static void main(String[] args) {
        // calling a static method from MyClass
        MyClass.myStaticMethod();
    }
}
```

In this example, we have created a new class called `SecondClass` and called the `myStaticMethod()` method of the `MyClass` class using the classname followed by the method name, `MyClass.myStaticMethod()`.

That's all there is to it! Just make sure to use the `static` keyword in your method declaration to define a static method in Java.