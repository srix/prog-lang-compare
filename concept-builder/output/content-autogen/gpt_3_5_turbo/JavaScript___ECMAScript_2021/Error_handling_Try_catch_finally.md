In JavaScript- ECMAScript 2021, try/catch/finally blocks are used for error handling. The basic syntax of try/catch/finally is as follows:

```
try {
   // code to try
}
catch(error) {
   // code to handle the error
}
finally {
   // code to execute regardless of the try/catch result
}
```

Here, the `try` block contains the code that may throw an error. If an error occurs, control is transferred to the `catch` block, which contains the code to handle the error. The `finally` block contains code that is executed regardless of whether or not an error occurred. 

Example 1:

```
try {
  let a = undefinedVariable // undefinedVariable is not defined
}
catch(error) {
  console.log(error); // error message will be printed
}
finally {
  console.log('This statement will always be executed');
}
```

Output:
```
ReferenceError: undefinedVariable is not defined
This statement will always be executed
```

In this example, `undefinedVariable` is not defined in the try block, so it will throw an error. Therefore, the control is transferred to the catch block, which contains the error message. The finally block will always be executed, in this example, it will print the message.


Example 2:

```
try {
  let num = 'Hello'
  if(isNaN(num)) {
    throw 'Not a Number';
  }
  else {
    console.log(num*2); // will not execute
  }
}
catch(error) {
  console.log(error);
}
finally {
  console.log('This statement will always be executed');
}
```

Output:
```
Not a Number
This statement will always be executed
```

In this example, the variable `num` is initialized to a string value. The `isNaN()` built-in function checks if the value is not a number and throws an error if it is not. Therefore, control is transferred to the catch block, which contains the error message. The finally block will always be executed, in this example, it will print the message.

So, try/catch/finally block is helpful in handling various types of errors that may occur during the execution of a program.