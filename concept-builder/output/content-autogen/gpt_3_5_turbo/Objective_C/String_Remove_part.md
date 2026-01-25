In Objective-C, NSString is the primary class for working with strings. To remove part of a string in Objective-C, we can use the `stringByReplacingOccurrencesOfString:withString:` method. This method replaces all occurrences of a specified string with another string.

Here is an example:

```
NSString *string = @"Hello, world!";
NSString *substring = @"world";
NSString *newString = [string stringByReplacingOccurrencesOfString:substring withString:@""];
NSLog(@"%@", newString);
```

In the above example, we used the `stringByReplacingOccurrencesOfString:withString:` method to remove the "world" substring from the original string "Hello, world!". The resulting string, stored in the `newString` variable, is "Hello, !". 

We can also specify options to control the search behavior, such as case-sensitivity or search direction. For example, the following code removes the first occurrence of the "world" substring, regardless of case:

```
NSString *string = @"Hello, WORLD!";
NSString *substring = @"world";
NSString *newString = [string stringByReplacingOccurrencesOfString:substring withString:@"" options:NSCaseInsensitiveSearch range:NSMakeRange(0, string.length)];
NSLog(@"%@", newString);
```

The resulting string is "Hello, !". Note that we used the `NSCaseInsensitiveSearch` option to ignore case during the search. We also specified a range to limit the search to the entire string using the `NSMakeRange` function.