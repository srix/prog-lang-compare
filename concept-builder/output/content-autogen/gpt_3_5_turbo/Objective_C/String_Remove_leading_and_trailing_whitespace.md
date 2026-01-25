To remove leading and trailing whitespaces from a string in Objective-C, you can use the `NSString` method `stringByTrimmingCharactersInSet:`. Here's an example code snippet:

```objective-c
NSString *myString = @"  Hello, world!   ";
NSCharacterSet *whitespaceCharacterSet = [NSCharacterSet whitespaceCharacterSet];
NSString *trimmedString = [myString stringByTrimmingCharactersInSet:whitespaceCharacterSet];
NSLog(@"Original string: %@\nTrimmed string: %@", myString, trimmedString);
```

In this example, we first initialize a string `myString` containing leading and trailing whitespaces. Then, we create a character set `whitespaceCharacterSet` that contains all whitespace characters. Finally, we use `stringByTrimmingCharactersInSet:` to remove any leading or trailing characters that match the `whitespaceCharacterSet`. The resulting string is stored in `trimmedString`, which we print to the console along with the original string. The output should be:

```
Original string:   Hello, world!   
Trimmed string: Hello, world!
```