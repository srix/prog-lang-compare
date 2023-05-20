To write a file in Java, we have to follow below steps:

1. Create a file object.
2. Open the file using FileOutputStream.
3. Write data into the file using OutputStream.write() or OutputStreamWriter.write() method.
4. Close the output stream.

Here is an example in Java 20:

```
import java.io.*;

public class WriteFileExample {
   public static void main(String[] args) throws IOException {
      // Create a file object
      File file = new File("example.txt");
      
      // Open the file using FileOutputStream
      FileOutputStream outputStream = new FileOutputStream(file);
      
      // Write data into the file using OutputStream.write() or OutputStreamWriter.write() method
      String data = "Hello, World!";
      outputStream.write(data.getBytes());
      
      // Close the output stream
      outputStream.close();
   }
}
```

In this example, we are creating a 'File' object named 'example.txt'. We then open the file using 'FileOutputStream' and write the string "Hello, World!" into the file using the 'write()' method. Finally, we close the output stream using 'close()' method.