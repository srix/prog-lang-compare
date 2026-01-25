In Java, we can get the parent directory path of a file or directory using the getParent() method of the java.io.File class. Here's an example:

```java
import java.io.File;

public class ParentDirExample {
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Documents\\file.txt");
        String parentDir = file.getParent();
        System.out.println("Parent directory: " + parentDir);
    }
}
```

Output:

```
Parent directory: C:\Users\Documents
```

In this example, we created a File object representing a file "file.txt" in the "Documents" directory under the "Users" directory in the C drive. We then called the getParent() method on this object to get the parent directory path and stored it in a string variable. Finally, we printed the parent directory path to the console.

Note that the getParent() method returns null if the file or directory does not have a parent directory (i.e. it is at the root level).