In Java, alias is not a language feature. However, you can create an alias using the "import" statement. 

For example, instead of writing "java.util.HashMap" every time, you can create an alias for it:

```java
import java.util.HashMap;

public class MyClass {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("apple", 1);
        map.put("orange", 2);
        map.put("banana", 3);
        System.out.println(map);
    }
}
```

In the example above, we imported the `java.util.HashMap` and gave it the alias name `HashMap`. This way, we can use `HashMap` instead of the full name every time we want to create an object from the class.

You can also create aliases for static methods and fields using the "import static" statement. For example:

```java
import static java.lang.Math.*;

public class MyClass {
    public static void main(String[] args) {
        double result = sqrt(4) + pow(2, 3);
        System.out.println(result);
    }
}
```

In the example above, we imported two static methods from the `java.lang.Math` class, `sqrt()` and `pow()`, using the "import static" statement. We can now use these methods directly without the class name prefix.