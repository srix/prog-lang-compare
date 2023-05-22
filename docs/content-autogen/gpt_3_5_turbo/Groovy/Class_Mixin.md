Mixin is a powerful feature of Groovy that allows you to add methods and properties to Java classes at runtime. This can be very useful in situations where you want to extend the functionality of a Java class that you are using, but do not have access to the source code.

To use mixin in Groovy, you first need to define a mixin class. This is a normal Groovy class that contains the methods and properties you want to add to the Java class.

Here is an example of a simple mixin class:

```
class MyMixin {
    def myMethod() {
        println "This is a mixin method"
    }
}
```

Next, you can use the `withMixin()` method to apply the mixin to a Java class. Here is an example:

```
import groovy.transform.Mixin

@Mixin(MyMixin)
class MyClass {
    public static void main(String[] args) {
        MyClass obj = new MyClass()
        obj.myMethod()
    }
}
```

In this example, we use the `@Mixin` annotation to indicate that we want to apply the `MyMixin` class to the `MyClass` Java class. We then call the `withMixin()` method to apply the mixin.

Finally, we create an instance of `MyClass` and call the method that was added by the mixin. This will output the following message:

```
This is a mixin method
```

In this way, you can use mixin to add additional functionality to Java classes at runtime.