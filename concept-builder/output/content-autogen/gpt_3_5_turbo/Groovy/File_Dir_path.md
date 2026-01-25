In Groovy, you can get the directory path using the `File` class and its `getParent()` method. Here's an example code:

```groovy
def file = new File("path/to/file.txt")
def dirPath = file.getParent()
println "Directory path: ${dirPath}"
```

Output:
```
Directory path: path/to
```

The above code creates a new `File` object with the path `"path/to/file.txt"` and then uses the `getParent()` method to get the directory path. The result is then printed to the console.

You can also get the current directory path using the `System` class and the `"user.dir"` system property. Here's an example:

```groovy
def currentDir = System.getProperty("user.dir")
println "Current directory path: ${currentDir}"
```

Output:
```
Current directory path: /path/to/current/directory
```

This code uses the `getProperty()` method of the `System` class to get the value of the `"user.dir"` property, which represents the current working directory of the user. The result is then printed to the console.