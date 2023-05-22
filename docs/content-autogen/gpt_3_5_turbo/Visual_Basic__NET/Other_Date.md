To use date in Visual Basic .NET, you can use the built-in Date data type and various date and time-related functions and properties. Here are some examples:

1. Getting the current date and time:
```
Dim currentDate As Date = Date.Now
```

2. Getting just the current date:
```
Dim currentDate As Date = Date.Today
```

3. Formatting a date as a string:
```
Dim currentDate As Date = Date.Now
Dim dateStr As String = currentDate.ToString("MM/dd/yyyy")
```

4. Adding or subtracting time from a date:
```
Dim currentDate As Date = Date.Now
Dim futureDate As Date = currentDate.AddDays(7)
Dim pastDate As Date = currentDate.AddHours(-2)
```

5. Comparing two dates:
```
Dim date1 As Date = #1/1/2020#
Dim date2 As Date = #1/15/2020#
Dim isAfter As Boolean = date2 > date1
Dim isBeforeOrEqual As Boolean = date1 <= date2
```

These are just some basic examples. There are many more functions and properties available for working with dates and times in Visual Basic .NET.