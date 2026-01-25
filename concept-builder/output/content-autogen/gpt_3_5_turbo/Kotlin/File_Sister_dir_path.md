In Kotlin, we can get the sister directory path using the `resolveSibling` method provided by the `java.io.File` class.

Here's an example:

```
val currentDir = File(".")
val parentDir = currentDir.parentFile
val sisterDir = parentDir.resolveSibling("sisterDir")
```

In the example above, we're first getting a reference to the current directory using the `.` notation and creating a `File` object. We then obtain the parent directory using the `parentFile` property of the `File` object. Finally, we call the `resolveSibling` method on the parent directory and pass the name of the sister directory as an argument to obtain its path.

Note that the sister directory should be located in the same parent directory as the current directory for the above code to work.