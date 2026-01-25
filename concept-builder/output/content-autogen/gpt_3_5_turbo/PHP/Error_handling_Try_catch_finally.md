In PHP, try/catch/finally blocks are used to handle exceptions. A try block contains the code that may throw an exception, a catch block contains the code that handles the exception, and a finally block contains the code that is always executed, whether an exception is thrown or not.

Here's an example of how to use try/catch/finally blocks in PHP:

```
try {
    // code that may throw an exception
    $result = 10 / 0; // this will throw an exception
} catch (Exception $e) {
    // code that handles the exception
    echo 'Caught exception: ',  $e->getMessage(), "\n";
} finally {
    // code that is always executed
    echo 'Finally block executed';
}
```

In this example, the try block contains the code that will throw an exception (division by zero). The catch block contains the code that handles the exception by printing the message associated with the exception. Finally, the finally block contains the code that is always executed, regardless of whether an exception is thrown or not. In this case, it will print 'Finally block executed'.

You can use multiple catch blocks to handle different types of exceptions. Here's an example:

```
try {
    // code that may throw an exception
    $file = fopen("example.txt", "r");
    if(!$file) {
        throw new Exception("File not found");
    }
} catch (FileNotFoundException $fnfe) {
    // code that handles FileNotFoundException
    echo 'Caught FileNotFoundException: ',  $fnfe->getMessage(), "\n";
} catch (Exception $e) {
    // code that handles all other exceptions
    echo 'Caught exception: ',  $e->getMessage(), "\n";
} finally {
    // code that is always executed
    echo 'Finally block executed';
}
```

In this example, the try block contains the code that will throw a FileNotFoundException if the file is not found. The first catch block handles only this specific exception. The second catch block handles all other exceptions. Finally, the finally block contains the code that is always executed.