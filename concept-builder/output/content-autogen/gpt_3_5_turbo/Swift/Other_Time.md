In Swift, you can use the `Date` struct to work with time. Here are some examples of how to use time in Swift:

### Getting the current date and time:

Use the `Date()` initializer to get the current date and time:

```swift
let now = Date()
print(now) // prints the current date and time
```

### Formatting dates:

You can use the `DateFormatter` class to format dates in various ways. Here's an example of how to format a date as a string:

```swift
let dateFormatter = DateFormatter()
dateFormatter.dateFormat = "dd MMM yyyy HH:mm:ss"
let dateString = dateFormatter.string(from: now)
print(dateString) // prints something like "01 Sep 2021 14:53:22"
```

### Adding or subtracting time:

You can use the `Calendar` class to add or subtract time from a `Date` object. Here's an example of how to add 1 day to the current date:

```swift
let calendar = Calendar.current
let tomorrow = calendar.date(byAdding: .day, value: 1, to: now)!
print(tomorrow) // prints the date and time that is one day ahead of now
```

### Comparing dates:

You can use the `compare` method of the `Date` class to compare two `Date` objects. Here's an example of how to check whether a date is in the future:

```swift
if tomorrow.compare(now) == .orderedDescending {
    print("tomorrow is in the future")
} else {
    print("tomorrow is not in the future")
}
```

### Calculating time intervals:

You can use the `timeIntervalSince` method of the `Date` class to calculate the time interval between two `Date` objects. Here's an example of how to calculate the time interval between now and tomorrow:

```swift
let timeInterval = tomorrow.timeIntervalSince(now)
print(timeInterval) // prints the number of seconds between now and tomorrow
```