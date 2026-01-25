In Java, we can use the `getClass()` method to get the type of an object. Here's an example:

```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        System.out.println(str.getClass()); // Output: class java.lang.String
    }
}
```

In this example, we have created a variable `str` of type `String` and used the `getClass()` method to get the type of the object. The output of the program is `class java.lang.String`, which is the type of the `str` object.

Another example:

```java
public class Main {
    public static void main(String[] args) {
        Integer num = 10;
        System.out.println(num.getClass()); // Output: class java.lang.Integer
    }
}
```

In this example, we have created a variable `num` of type `Integer` and used the `getClass()` method to get the type of the object. The output of the program is `class java.lang.Integer`, which is the type of the `num` object.

Note that `getClass()` returns an object of type `Class`, which represents the type of the object. This class provides various methods to get information about the type, such as its name, package, superclass, interfaces, etc.