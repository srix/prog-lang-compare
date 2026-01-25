In TypeScript, try/catch/finally statements are used to handle exceptions that may occur during the execution of a block of code. The try block contains the code that may generate an exception, and the catch block is used to handle the exception if it occurs. The finally block contains code that will be executed regardless of whether an exception was generated or not.

Let's look at an example:

```
try {
   let num = 10/0; // This will throw an exception
   console.log(`The value of the number is: ${num}`);
}
catch (e) {
   console.log(`An error occurred: ${e.message}`);
}
finally {
   console.log("Finally block will always execute");
}
```

In this example, we are dividing 10 by 0, which will generate an exception. The catch block will catch the exception and print out the error message. Finally, the `finally` block will always be executed, regardless of whether an exception was generated or not.

Another example can be written as follows:

```
try {
   let data = JSON.parse('{"name":"John", "age":30}'); // Correct JSON format
   console.log(`Name: ${data.name}, Age: ${data.age}`);
}
catch (e) {
   console.log(`An error occurred: ${e.message}`);
}
finally {
   console.log("Finally block will always execute");
}
```

In this example, we are parsing a correctly formatted JSON string. Therefore, no exception will be generated. The catch block will not be executed, and the finally block will be executed.

In summary, try/catch/finally statements in TypeScript provide a convenient way to handle exceptions that may occur within our code. The try block contains the code that may generate an exception, the catch block is used to handle the exception if it occurs, and the finally block contains code that will be executed regardless of whether an exception was generated or not.