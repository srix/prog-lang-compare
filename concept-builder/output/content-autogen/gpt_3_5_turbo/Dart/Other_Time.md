In Dart, time is managed through the `DateTime` class, which represents a date and time value. Here are some examples of how to use time in Dart:

1. Get the current date and time:

```
DateTime now = DateTime.now();
print(now);
```

2. Create a specific date and time:

```
DateTime date = DateTime(2022, 12, 31, 23, 59, 59);
print(date);
```

3. Convert a timestamp to a `DateTime`:

```
DateTime date = DateTime.fromMillisecondsSinceEpoch(1640995200000);
print(date);
```

4. Get the difference between two dates as a duration:

```
DateTime date1 = DateTime(2022, 12, 31);
DateTime date2 = DateTime(2023, 1, 1);
Duration difference = date2.difference(date1);
print(difference);
```

5. Add a duration to a date:

```
DateTime date = DateTime(2022, 12, 31);
Duration duration = Duration(days: 1);
DateTime newDate = date.add(duration);
print(newDate);
```

These are just some examples of how to use time in Dart. With the `DateTime` class and its related methods, you can perform a variety of time-related operations.