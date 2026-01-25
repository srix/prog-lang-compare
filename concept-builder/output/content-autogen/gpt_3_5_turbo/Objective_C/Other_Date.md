To use dates in Objective-C, you can utilize the `NSDate` class. Here are some examples:

1. Getting the current date and time:
```
NSDate *currentDate = [NSDate date];
```

2. Creating a date from a specified string:
```
NSString *dateString = @"2021-08-20 14:30:00";
NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
[dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm:ss"];
NSDate *customDate = [dateFormatter dateFromString:dateString];
```

3. Converting a date to a string with a specific format:
```
NSDate *someDate = [NSDate date];
NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
[dateFormatter setDateFormat:@"dd/MM/yyyy"];
NSString *formattedDate = [dateFormatter stringFromDate:someDate];
```

4. Comparing two dates:
```
NSDate *date1 = [NSDate date];
NSDate *date2 = [NSDate dateWithTimeIntervalSinceNow:-86400]; // 1 day ago
NSComparisonResult result = [date1 compare:date2];
if (result == NSOrderedDescending) {
    NSLog(@"date1 is later than date2");
} else if (result == NSOrderedAscending) {
    NSLog(@"date1 is earlier than date2");
} else {
    NSLog(@"date1 and date2 are the same");
}
```

5. Adding or subtracting time interval from a date:
```
NSDate *someDate = [NSDate date];
NSDate *newDate = [someDate dateByAddingTimeInterval:3600]; // Adds 1 hour
NSDate *modifiedDate = [someDate dateByAddingTimeInterval:-86400]; // Subtracts 1 day
```

These are just some basic examples of how to work with dates in Objective-C. There are many more features and functions available in the `NSDate` class that can be used to manipulate or format dates as needed.