In Objective-C, you can convert a string to an integer using the `intValue` method. Here's an example:

```
NSString *numberString = @"42";
NSInteger number = [numberString intValue];
NSLog(@"The number is %ld", (long)number);
```

In this example, the `numberString` variable is a string that contains the number "42". The `intValue` method is used to convert this string to an integer, which is then stored in the `number` variable. The `%ld` format specifier is used to print the integer value using `NSLog`.

Another example could be:

```
NSString *numberString = @"69";
NSNumberFormatter *formatter = [[NSNumberFormatter alloc] init];
formatter.numberStyle = NSNumberFormatterDecimalStyle;
NSNumber *myNumber = [formatter numberFromString:numberString];
NSInteger number = [myNumber integerValue];
NSLog(@"The number is %ld", (long)number);
```

In this example, we also start with a string containing a number ("69" in this case). However, this time we are using the `NSNumberFormatter` class to convert the string to an `NSNumber` object. The `numberFromString` method of the formatter is used to convert the string to `NSNumber` and then `integerValue` is used to convert the `NSNumber` to an `NSInteger`.