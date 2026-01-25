In MATLAB, try-catch is a control flow statement that allows you to handle probable errors and contingencies that may arise during program execution. The try block's purpose is to place your code that may cause an error, and the catch block's purpose is to deal with the raised error. The finally block executes whether or not an error has been raised.

Here's an example of using try-catch-finally in MATLAB:

```
try
  % Place the code that may raise an error in try block
  numer = input('Enter the numerator: ');
  denom = input('Enter the denominator: ');
  result = numer / denom;
  
  % Display the result
  disp(result);
catch ME
  % The catch block will run if an error is raised
  fprintf('Error Message: %s\n', ME.message);
  fprintf('Error Identifier: %s\n', ME.identifier);
finally
  % The finally block always executes regardless of errors
  disp('Everything has been executed successfully!\n');
end
```

In the above example, the user is inputting the numerator and denominator values, and then the program executes the division operation. However, if the user enters 0 as the denominator, the program raises an error. The try-catch block catches the error and raises a custom error message. The finally block executes at the end regardless of whether an error is raised. The resulting output of the above code would look something like this:

```
Enter the numerator: 5
Enter the denominator: 0
Error Message: Divide by zero.
Error Identifier: MATLAB:divideByZero
Everything has been executed successfully!
```