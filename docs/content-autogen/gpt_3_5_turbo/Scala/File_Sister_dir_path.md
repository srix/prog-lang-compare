In Scala, you can get the path of the sibling directory (sister directory) by using the `java.io.File` class and its `getParent()` method.

Here's an example:

```scala
import java.io.File

// create a file object that represents a file in the sibling directory
val file = new File("../sibling_dir/example.txt")

// get the path of the parent directory
val parent = file.getParent()

// get the path of the sibling directory by joining the parent path with the sibling directory name
val sibling = new File(parent, "sibling_dir")

// display the path of the sibling directory
println(sibling.getPath())
```

In this example, we first create a `File` object that represents a file in the sibling directory using a relative path (`../sibling_dir/example.txt`). Then we get the path of the parent directory by calling the `getParent()` method on the file object. Next, we create a new `File` object for the sibling directory by joining the parent path with the sibling directory name (`sibling_dir`). Finally, we display the path of the sibling directory using the `getPath()` method.

Note that the relative path (`../sibling_dir/example.txt`) assumes that the current working directory is a directory that contains both the current directory and the sibling directory. If the current working directory is different, you may need to adjust the relative path accordingly.