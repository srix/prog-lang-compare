In Objective-C, we can use the class `NSDate` to work with time in our code. Here are some examples:

1. Get the current time

To get the current time, we can create a new `NSDate` object and initialize it with the `+[NSDate date]` method:

```objective-c
NSDate *now = [NSDate date];
NSLog(@"The current time is %@", now);
```

2. Compare two dates

We can compare two dates using the `compare:` method of `NSDate`. It returns an `NSComparisonResult` enum that tells us whether the first date is before, after, or equal to the second date:

```objective-c
NSDate *date1 = [NSDate dateWithTimeIntervalSinceNow:3600];  // One hour from now
NSDate *date2 = [NSDate dateWithTimeIntervalSinceNow:7200];  // Two hours from now

NSComparisonResult result = [date1 compare:date2];
if (result == NSOrderedAscending) {
    NSLog(@"date1 is before date2");
} else if (result == NSOrderedDescending) {
    NSLog(@"date1 is after date2");
} else {
    NSLog(@"date1 is equal to date2");
}
```

3. Add or subtract time intervals

We can add or subtract time intervals (in seconds) to/from an `NSDate` using the `dateByAddingTimeInterval:` method:

```objective-c
NSDate *now = [NSDate date];  // The current time
NSTimeInterval oneHour = 60 * 60;

NSDate *oneHourLater = [now dateByAddingTimeInterval:oneHour];
NSDate *oneHourAgo = [now dateByAddingTimeInterval:-oneHour];

NSLog(@"One hour later: %@", oneHourLater);
NSLog(@"One hour ago: %@", oneHourAgo);
```

4. Convert a date to a string

We can convert an `NSDate` to a string using an `NSDateFormatter` instance. For example, to convert the current time to a string in the format "yyyy-MM-dd HH:mm:ss":

```objective-c
NSDate *now = [NSDate date];
NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
[formatter setDateFormat:@"yyyy-MM-dd HH:mm:ss"];

NSString *string = [formatter stringFromDate:now];
NSLog(@"The current time as a string: %@", string);
```

These are just some basic examples of working with time in Objective-C using `NSDate`. There are many more methods and features in the `NSDate` class and related classes for working with dates and times in more advanced ways.