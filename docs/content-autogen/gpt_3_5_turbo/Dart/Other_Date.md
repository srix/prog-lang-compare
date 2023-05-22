In Dart, you can use the `DateTime` class to work with dates and times. Here are some examples of how to use `DateTime`:

1. Create a `DateTime` object representing the current date and time:
```
DateTime now = DateTime.now();
```

2. Create a `DateTime` object for a specific date and time:
```
DateTime myBirthday = DateTime(1990, 6, 2, 12);
```

3. Convert a `DateTime` object to a string representation:
```
DateTime now = DateTime.now();
String dateString = now.toString();
print(dateString); // Output: 2022-08-23 21:45:00.123456
```

4. Get the year, month, day, hour, minute, or second from a `DateTime` object:
```
DateTime now = DateTime.now();
int year = now.year;
int month = now.month;
int day = now.day;
int hour = now.hour;
int minute = now.minute;
int second = now.second;
```

5. Perform arithmetic on `DateTime` objects:
```
DateTime now = DateTime.now();
DateTime tomorrow = now.add(Duration(days: 1));
DateTime yesterday = now.subtract(Duration(days: 1));
```

6. Compare `DateTime` objects:
```
DateTime now = DateTime.now();
DateTime later = DateTime.now().add(Duration(hours: 1));
bool isBefore = now.isBefore(later);
bool isAfter = now.isAfter(later);
```

These are just some of the ways you can use `DateTime`. There are many more methods and properties available on the `DateTime` class that you can use to work with dates and times in your Dart code.