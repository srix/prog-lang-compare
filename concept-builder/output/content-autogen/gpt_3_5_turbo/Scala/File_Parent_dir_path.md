To get the parent directory path in Scala, you can use the `java.nio.file.Paths` class which provides a method called `getParent()` that returns the path of the parent directory. Here is an example:

```scala
import java.nio.file.Paths

val path = Paths.get("/home/user/Documents/file.txt")
val parentPath = path.getParent()

println("Parent path: " + parentPath.toString())
```

Output:
```
Parent path: /home/user/Documents
```

In this example, we have defined a file path (`/home/user/Documents/file.txt`) and using `Paths.get()`, we have created a `java.nio.file.Path` object `path`. Then, we called the `getParent()` method on the path object to get the parent directory path. Finally, we printed the parent directory path using `toString()`.