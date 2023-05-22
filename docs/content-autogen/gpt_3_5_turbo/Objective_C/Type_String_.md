In Objective-C, you can use the `NSNumberFormatter` class to check if a string is a number. Here is an example of how to check if a string is a decimal number:

```objective-c
NSString *inputString = @"123.45";
NSNumberFormatter *formatter = [[NSNumberFormatter alloc] init];
formatter.numberStyle = NSNumberFormatterDecimalStyle;
NSNumber *number = [formatter numberFromString:inputString];
if (number != nil) {
    NSLog(@"%@ is a number", inputString);
} else {
    NSLog(@"%@ is not a number", inputString);
}
```

In this example, we create a `NSNumberFormatter` object and set its `numberStyle` property to `NSNumberFormatterDecimalStyle`, which allows it to recognize decimal numbers. We then use the `numberFromString:` method to attempt to convert the input string to a number. If the resulting `NSNumber` object is not `nil`, then the input string is a number.

Here's another example for checking if a string is an integer:

```objective-c
NSString *inputString = @"123";
NSNumberFormatter *formatter = [[NSNumberFormatter alloc] init];
formatter.numberStyle = NSNumberFormatterDecimalStyle;
NSNumber *number = [formatter numberFromString:inputString];
if (number != nil && number.intValue == number.doubleValue) {
    NSLog(@"%@ is an integer", inputString);
} else {
    NSLog(@"%@ is not an integer", inputString);
}
```

In this example, we use the same `NSNumberFormatter` object and the `numberFromString:` method to attempt to convert the input string to a number. We also check if the number is an integer by comparing its `intValue` and `doubleValue`. If they are equal, then the input string is an integer.