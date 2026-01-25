In Objective-C, you can split a string into an array of substrings based on a delimiter using the `componentsSeparatedByString` method.

Here's an example:

```objective-c
NSString *myString = @"The quick brown fox jumps over the lazy dog";
NSArray *myArray = [myString componentsSeparatedByString:@" "];
NSLog(@"%@", myArray);
```

Output:
```
(
    The,
    quick,
    brown,
    fox,
    jumps,
    over,
    the,
    lazy,
    dog
)
```

In this example, the `componentsSeparatedByString` method is used to split the `myString` variable into an array of substrings based on the delimiter " ". The resulting array is stored in the `myArray` variable and printed using `NSLog`.