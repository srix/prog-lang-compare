In C#, you can use the system DateTime struct to work with date and time values. It provides several useful methods and properties that allow you to manipulate time and date values as per your requirements. Here are some examples of how to use time in C#:

Example 1: Get Current Date and Time
```csharp
using System;
 
class Program
{
    static void Main()
    {
         DateTime now = DateTime.Now;
         Console.WriteLine(now.ToString());
    }
}
```
The output will be in the format of month/day/year hour:minute:seconds AM/PM

Example 2: Create a DateTime Object with Specific Date and Time
```csharp
using System;
 
class Program
{
    static void Main()
    {
        DateTime date = new DateTime(2022, 12, 31, 23, 59, 59);
        Console.WriteLine(date.ToString());
    }
}
```
The output will be: 12/31/2022 11:59:59 PM

Example 3: Add Days, Months, or Years to a DateTime Object
```csharp
using System;
 
class Program
{
    static void Main()
    {
        DateTime date = new DateTime(2022, 1, 1);
        date = date.AddDays(10);
        date = date.AddMonths(2);
        date = date.AddYears(1);
 
        Console.WriteLine(date.ToString());
    }
}
```
The output will be: 03/11/2023 12:00:00 AM

Example 4: Get the Difference Between Two Dates
```csharp
using System;
 
class Program
{
    static void Main()
    {
        DateTime firstDate = new DateTime(2022, 1, 1);
        DateTime secondDate = new DateTime(2022, 12, 31);
 
        TimeSpan difference = secondDate - firstDate;
 
        Console.WriteLine(difference.TotalDays);
    }
}
```
The output will be: 364

These examples illustrate some of the basic ways to use time in C#. You can explore the DateTime class further to learn about more advanced functionality.