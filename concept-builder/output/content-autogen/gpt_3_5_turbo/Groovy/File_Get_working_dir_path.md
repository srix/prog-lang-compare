In Groovy, you can get the current working directory path using the `System.getProperty()` method with a key of "user.dir". Here's an example code snippet that demonstrates how to do this:

```groovy
def currentDir = System.getProperty("user.dir")
println "Current working directory is: $currentDir"
```

This code will output the current working directory path to the console. Note that the `$currentDir` variable is enclosed in double-quotes and preceded by a `$` character to make it work as a variable substitution.

Alternatively, you can also use the `File` object to get the working directory path. Here's how you can do it:

```groovy
def currentDir = new File(".").canonicalPath
println "Current working directory is: $currentDir"
```

This code creates a new `File` object with the relative path of "." (which is equivalent to the current directory), and then calls the `canonicalPath` method to get the absolute path of the current working directory. The result is stored in the `currentDir` variable and printed to the console.