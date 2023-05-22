To replace a substring within a string in Objective-C, you can use the `stringByReplacingOccurrencesOfString` method of NSString class. 

Here's an example: 

```objective-c
NSString *originalString = @"The quick brown fox jumps over the lazy dog.";
NSString *replacementString = @"red panda";
NSString *newString = [originalString stringByReplacingOccurrencesOfString:@"fox" withString: replacementString];
NSLog(@"%@", newString);
```

In the above example, we are replacing the substring "fox" in the original string with the replacement string "red panda". The output will be:

```objective-c
"The quick brown red panda jumps over the lazy dog."
```

Similarly, you can also replace a regular expression by using the `stringByReplacingOccurrencesOfString:withString:options:range:` method with NSRegularExpressionSearch option. 

Here's an example: 

```objective-c
NSString *originalString = @"The quick brown fox jumps over the lazy dog 22 times.";
NSString *newString = [originalString stringByReplacingOccurrencesOfString:@"\\d+" 
                                                               withString:@"" 
                                                                  options:NSRegularExpressionSearch 
                                                                    range:NSMakeRange(0, originalString.length)];
NSLog(@"%@", newString);
```

In the above example, we are replacing all the digits in the original string with an empty string using a regular expression pattern `\\d+`. The output will be:

```objective-c
"The quick brown fox jumps over the lazy dog  times."
```