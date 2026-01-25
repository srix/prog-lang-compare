To import a library in Java, you use the `import` keyword followed by the name of the library. Here's an example for importing the `java.util` library:

```java
import java.util.*;
```

This imports all the classes in the `java.util` library, allowing you to use them in your code without having to fully qualify them.

You can also import individual classes from a library, like this:

```java
import java.util.ArrayList;
import java.util.LinkedList;
```

This imports only the `ArrayList` and `LinkedList` classes from the `java.util` library.

Here's an example code block that demonstrates importing the `java.util` library and using the `ArrayList` class:

```java
import java.util.*;

public class Example {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<String>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        System.out.println(names);
    }
}
```

In this example, we first import the `java.util` library using the wildcard (`*`) syntax. Then, we create an `ArrayList<String>` object and add three names to it. Finally, we print out the contents of the `ArrayList` using the `System.out.println()` method.