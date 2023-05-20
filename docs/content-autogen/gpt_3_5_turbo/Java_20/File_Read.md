To read a file in Java 20, you can use the following code snippet:

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFile {
    public static void main(String[] args) {
        BufferedReader reader;
        try {
            reader = new BufferedReader(new FileReader("filename.txt"));
            String line = reader.readLine();
            while (line != null) {
                System.out.println(line);
                line = reader.readLine();
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

This code creates a new `BufferedReader` object and passes it a new `FileReader` object with the name of the file to be read as a parameter. The `BufferedReader` class is used to read the file line by line. The `readLine()` method reads a line of text and returns it as a string. The loop continues until `readLine()` returns `null`, indicating the end of the file.

Another way to read a file in Java is using the `Scanner` class. Here's an example:

```java
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class ReadFile {
    public static void main(String[] args) {
        try {
            File file = new File("filename.txt");
            Scanner scanner = new Scanner(file);

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                System.out.println(line);
            }
            scanner.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

This code creates a `File` object with the name of the file to be read and passes it to a new `Scanner` object. The `hasNextLine()` method checks if the scanner has more lines to read, and the `nextLine()` method reads the next line as a string. Again, the loop continues until there are no more lines to read. Finally, the `Scanner` object is closed.