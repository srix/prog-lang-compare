In Groovy, you can get the parent directory path of a file or directory using the `getParent()` method of the `File` class. Here's an example:

```groovy
def file = new File('/path/to/myfile.txt')
def parentDir = file.getParent()
println "Parent directory: $parentDir"
```

Output:
```
Parent directory: /path/to
```

You can also get the parent directory path directly from a string path using the `getParent()` method of the `Paths` class. Here's an example:

```groovy
import java.nio.file.Paths
def pathString = '/path/to/myfile.txt'
def parentDir = Paths.get(pathString).getParent().toString()
println "Parent directory: $parentDir"
```

Output:
```
Parent directory: /path/to
```

Note that both examples assume that the file or directory exists. If the file or directory doesn't exist, the `getParent()` method will return null.