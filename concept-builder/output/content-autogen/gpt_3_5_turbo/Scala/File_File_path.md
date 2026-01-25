In Scala, we can get the file path using the `java.io.File` class. Here are some examples:

1. Absolute path: To get the absolute path of a file, we can create a new `File` object with the file name and call the `getAbsolutePath()` method:

```
val file = new File("C:/myfolder/myfile.txt")
val path = file.getAbsolutePath()
println(path) // C:/myfolder/myfile.txt
```

2. Relative path: To get the relative path of a file, we can use the `getClass.getResource()` method on any class to get the path to the file as a URL:

```
val url = getClass.getResource("/myfile.txt")
val path = url.getPath()
println(path) // /path/to/project/src/main/resources/myfile.txt
```

3. Current directory: To get the current directory path, we can create a new `File` object with no arguments and call the `getAbsolutePath()` method:

```
val currentDir = new File("")
val path = currentDir.getAbsolutePath()
println(path) // /path/to/project
```

Note that the path returned by `getAbsolutePath()` and `getPath()` methods may differ depending on the operating system.