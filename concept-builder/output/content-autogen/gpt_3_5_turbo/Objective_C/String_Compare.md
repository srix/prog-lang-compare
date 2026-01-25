In Objective-C, you can compare strings using the `isEqualToString` method or by using `compare:` method.

Here's an example of using `isEqualToString` method to compare two strings:

```
NSString *stringOne = @"hello";
NSString *stringTwo = @"world";

if ([stringOne isEqualToString: stringTwo]) {
    NSLog(@"Both strings are equal.");
} else {
    NSLog(@"The strings are not equal.");
}
```

The output in this case would be "The strings are not equal", because the values of `stringOne` and `stringTwo` are not equal.

Here's an example using the `compare` method to compare two strings:

```
NSString *stringOne = @"apple";
NSString *stringTwo = @"banana";

NSComparisonResult result = [stringOne compare: stringTwo];

if (result == NSOrderedDescending) {
    NSLog(@"stringOne is greater than stringTwo");
} else if (result == NSOrderedAscending) {
    NSLog(@"stringOne is less than stringTwo");
} else {
    NSLog(@"Both strings are equal.");
}
```

The output in this case would be "stringOne is less than stringTwo", because "apple" comes before "banana" in alphabetical order. 

I hope this helps!