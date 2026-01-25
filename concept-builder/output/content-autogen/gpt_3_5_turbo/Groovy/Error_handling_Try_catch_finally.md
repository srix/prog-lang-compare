The try/catch/finally block in Groovy is used to handle exceptions that may occur during code execution. 

Here's an example of how to use try/catch/finally in Groovy:

```
try {
    // Code that may throw an exception goes here
    int result = 10 / 0
} catch (e) {
    // Handle exception
    println("An exception occurred: $e")
} finally {
    // Finally block always executes
    println("Finally block executed")
}
```

In the above example, we have a code block that attempts to perform a division operation, which will result in an ArithmeticException being thrown because we are attempting to divide by zero. 

The try block contains the code that may throw an exception, and the catch block is used to catch the exception if it occurs. In this case, we print a message indicating that an exception occurred. 

The finally block will always execute regardless of whether an exception was thrown or not. In this case, we print a message indicating that the finally block executed. 

Another example with multiple catch blocks:

```
try {
    // Code that may throw an exception goes here
    FileReader fileReader = new FileReader("nonexistent-file.txt")
    fileReader.read()
} catch (FileNotFoundException e) {
    // Handle FileNotFoundException
    println("File not found: $e")
} catch (IOException e) {
    // Handle IOException
    println("IO Exception occurred: $e")
} finally {
    // Finally block always executes
    println("Finally block executed")
}
```

In this example, we attempt to create a FileReader object for a non-existent file. This will throw a FileNotFoundException, which is caught in the first catch block. 

If an IOException occurs for any other reason, it will be caught in the second catch block. 

Finally block will execute regardless of which exception is caught.

Using try/catch/finally blocks allows developers to handle exceptions gracefully and take appropriate actions when they occur.