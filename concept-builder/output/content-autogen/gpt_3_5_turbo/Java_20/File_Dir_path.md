In Java 20, you can get the current directory path using the `System.getProperty()` method and the key `"user.dir"`. 

Here's an example code snippet:

```java
public class FilePathExample {
    public static void main(String[] args) {
        String currentDir = System.getProperty("user.dir");
        System.out.println("Current directory path: " + currentDir);
    }
}
```

In this example, `System.getProperty("user.dir")` returns the current directory path as a string, which is then printed to the console.

Note that the current directory is the directory from which your Java program is executed. If you want to access files in a different directory, you will need to provide the full path or relative path to that directory.