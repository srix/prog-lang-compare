To use date in C#, firstly you need to import the `System` namespace, which already has a `DateTime` structure included. You can use the `DateTime` structure to create date and time instances and manipulate them as needed. 

Here are some examples of using date in C#:

1. Creating a date-time instance

```
DateTime currentDate = DateTime.Now; // It creates a new instance with the current date and time.
DateTime specificDate = new DateTime(2021, 05, 03); // It creates an instance for a specific date.
```

2. Extracting date and time parts

```
int year = currentDate.Year;
int month = currentDate.Month;
int day = currentDate.Day;
int hour = currentDate.Hour;
int minutes = currentDate.Minute;
int seconds = currentDate.Second; 
```

3. Formatting date time 

```
string formatDateTime = currentDate.ToString("yyyy-MM-dd HH:mm:ss"); // "2021-05-03 14:05:30"
string shortDate = currentDate.ToShortDateString(); // "5/3/2021"
string longDate = currentDate.ToLongDateString(); // "Monday, May 03, 2021"
```

4. Adding and subtracting date and time

```
DateTime newDateTime = currentDate.AddDays(5); // adds 5 days from the current date
DateTime newTime = currentDate.AddHours(2); // adds 2 hours from the current date
TimeSpan timeDifference = newTime - currentDate; // finds the time difference between current and newTime
```

These are just a few examples of how to use date in C#. You can also perform various other operations like comparing and sorting dates, converting between different time zones, and more, depending on your requirement.