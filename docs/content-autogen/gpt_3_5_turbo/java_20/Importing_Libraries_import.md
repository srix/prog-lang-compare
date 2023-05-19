To import libraries in Java, you need to use the `import` keyword followed by the name of the library or package you want to import. Here are some examples:

1. Importing the `java.util` package, which contains classes for working with collections, dates, and other utilities.

```java
import java.util.*;

public class MyClass {
   // code goes here
}
```

2. Importing a specific class from the `java.awt` package, which contains classes for creating graphical user interfaces.

```java
import java.awt.Color;

public class MyClass {
   public static void main(String[] args) {
      Color myColor = new Color(255, 255, 0); // create a yellow color
      // code goes here
   }
}
```

3. Importing a class from a custom package. Let's say you have a package named `com.example` that contains a class named `MyClass`.

```java
import com.example.MyClass;

public class AnotherClass {
   public static void main(String[] args) {
      MyClass myObj = new MyClass(); // create an instance of MyClass
      // code goes here
   }
}
```

Note: The above examples assume that the libraries or packages are already installed or included in your Java environment. If they are not, you will need to download and install them first.