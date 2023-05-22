In Dart, you can use the `DateTime` class to work with dates and times. Here are some examples of how to use times in Dart:

1. Creating a `DateTime` object with the current time:

```dart
DateTime now = DateTime.now();
print(now); // prints something like: 2021-10-19 15:45:32.123456
```

2. Creating a `DateTime` object with a specific date and time:

```dart
DateTime dateTime = DateTime(2022, 5, 1, 12, 30);
print(dateTime); // prints: 2022-05-01 12:30:00.000
```

3. Formatting a `DateTime` object as a string:

```dart
DateTime now = DateTime.now();
String formatted = "${now.year}-${now.month}-${now.day} ${now.hour}:${now.minute}:${now.second}";
print(formatted); // prints something like: 2021-10-19 15:45:32
```

4. Getting the difference between two `DateTime` objects:

```dart
DateTime start = DateTime(2022, 1, 1);
DateTime end = DateTime(2022, 12, 31);
Duration difference = end.difference(start);
print(difference.inDays); // prints: 364
```

5. Adding or subtracting time from a `DateTime` object:

```dart
DateTime now = DateTime.now();
DateTime oneHourLater = now.add(Duration(hours: 1));
DateTime twoDaysAgo = now.subtract(Duration(days: 2));
print(oneHourLater); // prints: 2021-10-19 16:45:32.123456
print(twoDaysAgo);   // prints: 2021-10-17 15:45:32.123456
```