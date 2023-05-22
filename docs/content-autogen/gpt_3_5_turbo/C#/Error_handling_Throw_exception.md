Throwing an exception in C# enables a program or method to signal that an unexpected or unrecoverable problem has occurred during its execution. An exception is essentially an object that encapsulates information about the error and its context and allows the exception to be propagated to higher-level code for handling. There are various types of exceptions in C#, such as System.ArgumentException, System.NullReferenceException, System.IO.IOException, etc.

To throw an exception in C#, you can use the `throw` statement, followed by an instance of the desired exception type. Here are some examples:

Example 1: 

```csharp
int dividend = 10;
int divisor = 0;

if(divisor == 0)
{
   throw new DivideByZeroException("Cannot divide by zero");
}
else
{
   int result = dividend / divisor;
   Console.WriteLine("Result: " + result);
}
```

In this example, a `DivideByZeroException` is thrown if the `divisor` variable is zero. Otherwise, the division is performed normally and the result is printed to the console.

Example 2: 

```csharp
public class BankAccount
{
   private double balance;

   public void Deposit(double amount)
   {
      if(amount <= 0)
      {
         throw new ArgumentException("Deposit amount must be positive");
      }
      else
      {
         balance += amount;
         Console.WriteLine("Deposit successful. New balance: " + balance);
      }
   }
}
```

In this example, a custom `ArgumentException` is thrown if the `amount` parameter passed to the `Deposit` method is not positive. If the amount is valid, the balance is updated and a success message is printed.

These are just two examples of how to throw exceptions in C#. When an exception is thrown, it can be caught and handled using try-catch blocks.