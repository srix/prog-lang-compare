In Java 20, you can check if a class has a method using reflection. Reflection is a feature in Java that lets you investigate and manipulate the behavior of classes, interfaces, and objects at runtime.

Here's an example of how to check if a class has a method:

```java
import java.lang.reflect.Method;

public class ExampleClass {
    public static void main(String[] args) {
        // Get the class object for the class you want to check
        Class<?> clazz = MyClass.class;
        
        // Use the getMethod() method of the Class object to get the method you want to check
        Method method = null;
        try {
            method = clazz.getMethod("myMethod", String.class);
        } catch (NoSuchMethodException e) {
            System.out.println("The method 'myMethod' doesn't exist.");
            // Do something if the method doesn't exist in the class
        }
        
        if (method != null) {
            System.out.println("The method 'myMethod' exists.");
            // Do something if the method exists in the class
        }
    }
}

class MyClass {
    public void myMethod(String arg) {
        // Do something
    }
}
```

In this example, we're using the `getMethod()` method of the Class object to get the method we want to check (`myMethod()`). If the method exists in the class, the `getMethod()` method will return a `Method` object that we can use to invoke the method. If the method doesn't exist, the `getMethod()` method will throw a `NoSuchMethodException`.

After we get the `Method` object, we check if it's `null`. If it's not `null`, it means that the method exists in the class.

Note that you need to use the fully qualified name of the method in the `getMethod()` method (including the parameter types), and you need to use the `Class` object of the parameter types (not the parameter values).