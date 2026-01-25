The try-catch-finally statement is used in Java to handle exceptions. A try block contains a set of statements that may or may not throw an exception. The catch block is used to catch the exception that was thrown in the try block and take appropriate action. The finally block is used to execute code that will always be executed whether an exception is caught or not.

Here is an example of how to use try-catch-finally in a Java method:

```
public void readFromFile() {
   BufferedReader br = null;

   try {
      br = new BufferedReader(new FileReader("file.txt"));
      String line;
      while ((line = br.readLine()) != null) {
         System.out.println(line);
      }
   } catch (IOException e) {
      System.out.println("Error reading file: " + e.getMessage());
   } finally {
      try {
         if (br != null)
            br.close();
      } catch (IOException e) {
         System.out.println("Error closing file: " + e.getMessage());
      }
   }
}
```

In this example, we are reading lines from a file, using a BufferedReader. We declare the BufferedReader outside the try block, so that we can close it in the finally block. In the try block, we attempt to read the file, and if an IOException is thrown, we catch it in the catch block, print an error message, and continue with the execution. In the finally block, we check if the BufferedReader is not null and close it to release any system resources it was holding.

Another example:

```
public void divideNumbers(int a, int b) {
    try {
        int result = a / b;
        System.out.println("Result: " + result);
    } catch (ArithmeticException e) {
        System.out.println("Cannot divide by zero");
    } finally {
        System.out.println("Execution complete");
    }
}
```

In this example, we are attempting to divide two numbers. If the second number is 0, then an ArithmeticException is thrown. We catch this exception in the catch block, print an error message, and proceed to the finally block, where we print "Execution complete" to signal the end of the method regardless of whether an exception was thrown or not.

In summary, try-catch-finally blocks are used in Java to handle exceptions gracefully and ensure that resources are released regardless of whether exceptions occur or not in the try block.