In Groovy, there are multiple ways to get the file path. 

One way to get the file path is by using the `File` class. Here's an example:

```groovy
// creating a new file object
def file = new File("C:/Users/Username/Desktop/example.txt")

// getting the file path
def filePath = file.getAbsolutePath()

// printing the file path
println(filePath)
```

In the above example, the `file.getAbsolutePath()` method returns the absolute file path of the file object `file`. The output will be:

```
C:\Users\Username\Desktop\example.txt
```

Another way to get the file path is by using the `this.class.protectionDomain.codeSource.location.path` property. Here's an example:

```groovy
// getting the file path
def filePath = this.class.protectionDomain.codeSource.location.path

// printing the file path
println(filePath)
```

In the above example, the `this.class.protectionDomain.codeSource.location.path` property returns the current file path. The output will be something like:

```
C:/Users/Username/Desktop/my_script.groovy
``` 

Note that the file path separator is different depending on the operating system you're using. On Windows, the separator is `\`, while on Unix-based systems such as Linux and Mac, the separator is `/`. The `File.separator` property can be used to get the correct separator for the current operating system.