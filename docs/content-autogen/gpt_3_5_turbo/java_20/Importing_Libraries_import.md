In Java 20, you can import libraries using the `import` keyword. Here are some examples:

1. Importing a single class from a library:

```java
import java.util.ArrayList;

public class MyProgram {
    public static void main(String[] args) {
        ArrayList<String> myList = new ArrayList<String>();
        // code here
    }
}
```

In this example, we are importing the `ArrayList` class from the `java.util` package.

2. Importing multiple classes from a library:

```java
import java.util.*;

public class MyProgram {
    public static void main(String[] args) {
        ArrayList<String> myList = new ArrayList<String>();
        HashMap<String, Integer> myMap = new HashMap<String, Integer>();
        // code here
    }
}
```

In this example, we are importing all classes from the `java.util` package using the `*` wildcard.

3. Importing a static method or field from a class:

```java
import static java.lang.Math.*;

public class MyProgram {
    public static void main(String[] args) {
        int x = 2;
        double result = sqrt(x);
        // code here
    }
}
```

In this example, we are importing the `sqrt` method from the `java.lang.Math` class using the static import statement.

Note: It is recommended to import only the classes and members that you actually use in your code to avoid polluting the namespace and to improve readability.