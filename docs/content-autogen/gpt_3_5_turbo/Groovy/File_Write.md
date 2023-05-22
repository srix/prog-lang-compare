To write a file in Groovy, we can use the 'FileWriter' class. Here is an example of how to write to a file in Groovy:

```
def file = new File("example.txt")
file.write("Hello World\n")
file.append("More text to add\n") // Optional - Appends to existing data in the file
```

In the above example, we first create a new 'File' object called 'example.txt'. We then call the 'write' method on this object, passing in the data we wish to write to the file. Finally, we also have an optional call to the 'append' method which can be used to append more data to an existing file.

Another way to write to a file in Groovy is to use the 'PrintStream' class. Here is an example that demonstrates this approach:

```
def fileStream = new FileOutputStream("example.txt")
def printStream = new PrintStream(fileStream)
printStream.println("Hello World")
printStream.println("More text to add")
```

In this example, we first create a new 'FileOutputStream' object called 'example.txt'. We then pass this object to a 'PrintStream' instance and call the 'println' method to write data to the file. Note that each call to 'println' writes data followed by a newline character.

These are some common ways to write to a file in Groovy. Depending on your specific requirements, there may be other approaches or classes to consider as well.