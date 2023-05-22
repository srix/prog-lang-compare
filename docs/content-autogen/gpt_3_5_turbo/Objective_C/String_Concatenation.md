In Objective-C, you can concatenate two strings together using the `stringByAppendingString:` method. Here is an example:

```objective-c
NSString *str1 = @"Hello ";
NSString *str2 = @"World!";
NSString *result = [str1 stringByAppendingString:str2];
NSLog(@"%@", result); // Output: "Hello World!"
```

In the above example, we have created two strings `str1` and `str2` and concatenated them using the `stringByAppendingString:` method. This method returns a new string with the second string appended to the first string.

You can also use the `stringWithFormat:` method to concatenate strings. Here is an example:

```objective-c
NSString *firstName = @"John";
NSString *lastName = @"Doe";
NSString *fullName = [NSString stringWithFormat:@"%@ %@", firstName, lastName];
NSLog(@"%@", fullName); // Output: "John Doe"
```

In the above example, we have used the `stringWithFormat:` method to concatenate two strings `firstName` and `lastName` into a single string `fullName`. We have passed the `%@` format specifier to indicate that we want to insert a string value at that position.