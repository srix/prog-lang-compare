To get the sister directory path in Groovy, you can use the `parent` property of the `File` class to get the parent directory, and then use the `getChild` method to get the sister directory.

Here is an example code snippet that demonstrates how to get the sister directory path in Groovy:

```groovy
def currentDir = new File(".")
def parentDir = currentDir.parent
def sisterDir = parentDir.getChild("sisterDir")

println "Sister directory path: ${sisterDir.absolutePath}"
```

In this example, we first create an instance of the `File` class representing the current directory. We then get the parent directory by accessing the `parent` property of the `currentDir` object. Finally, we get the sister directory by calling the `getChild` method on the `parentDir` object, passing in the name of the sister directory as a string.

The `println` statement then prints the absolute path of the sister directory.

Note: To use this code, make sure that the sister directory exists in the parent directory.