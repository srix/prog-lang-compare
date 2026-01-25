In C#, times can be represented using the `DateTime` struct. Here's how to use times in C# with examples:

1. To get the current time in C#, you can use the `DateTime.Now` property.

   ```
   DateTime currentTime = DateTime.Now;
   Console.WriteLine("The current time is {0}", currentTime);
   ```

   This will output the current time in the format: `The current time is {month/day/year hour:minute:second AM/PM}`.

2. To create a specific time in C#, you can use the `DateTime.Parse` or `DateTime.ParseExact` methods.

   ```
   DateTime specificTime = DateTime.Parse("7:30 PM");
   Console.WriteLine("The specific time is {0}", specificTime);
   ```

   This will output the specific time in the format: `The specific time is {month/day/year 7:30:00 PM}`.

3. To perform time arithmetic in C#, you can use the `Add` and `Subtract` methods of the `DateTime` struct.

   ```
   DateTime startTime = DateTime.Parse("9:00 AM");
   DateTime endTime = startTime.AddHours(2.5);
   Console.WriteLine("The end time is {0}", endTime);
   ```

   This will output the end time in the format: `The end time is {month/day/year 11:30:00 AM}`. Note that we used the `AddHours` method to add 2.5 hours to the start time.

Overall, using times in C# is easy and straightforward, and with the `DateTime` struct, you can perform a variety of time-related operations.