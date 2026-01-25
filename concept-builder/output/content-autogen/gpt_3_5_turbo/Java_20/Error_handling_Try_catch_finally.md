In Java 20, try/catch/finally blocks are used to handle errors and exceptions within a program.

The try block contains the code that might throw an exception, and the catch block handles the exception if it is thrown. The finally block is used to clean up resources after the try block has finished, whether it successful or not.

Here is an example of try/catch/finally block in Java 20:

```
try {
    // code that might throw an exception
    int x = 10 / 0; // division by zero
} catch (ArithmeticException e) {
    // handle the exception
    System.out.println("Arithmetic Exception Caught: " + e.getMessage());
} finally {
    // clean up code
    System.out.println("Finally block executed.");
}
```

In this example, the code inside the try block tries to divide 10 by 0, which is not possible and hence will result in an ArithmeticException. The catch block handles this exception, printing out a message to the console. The finally block has cleanup code that will always execute whether there was an exception or not, in this case printing out a message to the console.

Another example could be where we access a file in the try block and use the finally block to ensure that the file is closed, even if there was an exception in the try block.

```
try {
    BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
    String line = reader.readLine();
    while(line != null) {
        System.out.println(line);
        line = reader.readLine();
    }
} catch (IOException e) {
    // handle the exception
    System.out.println("Exception caught: " + e.getMessage());
} finally {
    // clean up
    if(reader != null) {
        reader.close();
    }
    System.out.println("File Closed.");
}
```

In this example, we open a file and read from it, and if there is an IOException, we catch it and print an error message. The finally block closes the file, ensuring that resources are cleaned up, whether there was an exception or not.