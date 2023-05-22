In C#, try/catch/finally is used to handle exceptions that can occur during the execution of a program. 

The syntax for using try/catch/finally is as follows:

```
try
{
    // Code that may throw an exception
}
catch(Exception ex)
{
    // Code to handle the exception
}
finally
{
    // Code to be executed regardless of whether an exception was thrown or not
}
```

Here is an example of how to use try/catch/finally:

```
public static int Divide(int num1, int num2)
{
    try
    {
        return num1/num2;
    }
    catch(DivideByZeroException ex)
    {
        Console.WriteLine("Cannot divide by zero");
        return 0;
    }
    finally
    {
        Console.WriteLine("Division operation is complete");
    }
}
```

In the above example, the Divide() method takes two integers and returns their quotient. The code inside the try block performs the division operation. If an exception is thrown, the catch block is executed where an error message is displayed. Regardless of whether an exception is thrown or not, the code inside the finally block is executed, where a message is displayed indicating that the division operation is complete. 

In summary, try/catch/finally is used to handle exceptions in C#. It allows you to execute code that may throw an exception, catch the exception if it occurs, and execute code that needs to be performed regardless of whether an exception was thrown or not.