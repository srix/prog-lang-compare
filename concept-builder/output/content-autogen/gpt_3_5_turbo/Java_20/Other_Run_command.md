To run a Java program from the command line in Java 20, you need to follow these steps:

1. Open the command prompt/console.
2. Navigate to the directory where your Java program resides using the `cd` command.
3. Compile your Java program by running the `javac` command followed by the program name with the `.java` extension. For example: `javac MyClass.java`
4. Once the compilation is successful, you can run your Java program by entering the following command into the console: `java MyClass`. Here, `MyClass` is the name of the class that contains the main method.

Example:

Suppose you have a Java program called `HelloWorld.java`:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

To run this program from the command prompt, follow these steps:
1. Open the command prompt/console.
2. Navigate to the directory where the `HelloWorld.java` file is located using the `cd` command.
3. Compile the program by running `javac HelloWorld.java`.
4. Run `java HelloWorld`.

You should see "Hello World!" printed to the console.