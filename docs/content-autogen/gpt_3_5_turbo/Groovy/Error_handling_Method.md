The try/catch/finally block is used in Groovy to handle exceptions that may occur during the execution of a method. 

Here is an example of how to use try/catch/finally block in a method in Groovy:

```
def divideNumbers(int a, int b){
  try {
    return a/b
  } catch (ArithmeticException e) {
    println "Error: Division by zero"
  } finally {
    println "Division is complete"
  }
}
```

In this example, the method `divideNumbers` takes two integer parameters `a` and `b`. The `try` block attempts to divide `a` by `b`. If division by zero occurs, the `catch` block executes, and the output is `"Error: Division by zero"`. The `finally` block will always execute regardless of whether an exception occurs or not. 

Here is another example where we will be reading a file using `FileReader` and we will be adding `try/catch/finally` blocks:

```
def readFile(String fileName) {
  try {
    def reader = new FileReader(fileName)
    def content = reader.readLines().join('\n')
    return content
  } catch (FileNotFoundException e) {
    println "Error: File not found: ${fileName}"
  } catch (IOException e) {
    println "Error reading file: ${fileName}"
  } finally {
    reader?.close()
  }
}
```

In this example, the method `readFile` takes a `fileName` parameter and attempts to read the contents of that file. If the file is not found, the `catch` block with `FileNotFoundException` executes and outputs `"Error: File not found"`. If an IO exception occurs while reading the file, the `catch` block with `IOException` will execute and output `"Error reading file"`. Finally, the `finally` block will close the `FileReader` object to free system resources. 

In summary, try/catch/finally blocks are used in Groovy to handle exceptions that may occur during the execution of a method. The `try` block contains the code that might cause an exception, and the `catch` block is used to handle the exception if one is thrown. The `finally` block is used to execute finalizers, whether an exception is thrown or not.