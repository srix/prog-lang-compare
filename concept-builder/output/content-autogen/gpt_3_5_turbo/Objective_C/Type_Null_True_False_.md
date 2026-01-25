To check if a value is null in Objective-C, you can use the `==` operator with the keyword `NULL`. Here's an example:

```
NSString *myString = nil;
if (myString == NULL) {
    NSLog(@"The value is null.");
} else {
    NSLog(@"The value is not null.");
}
```

To check if a value is true or false in Objective-C, you can use the `==` operator with the `YES` or `NO` keywords. Here are two examples:

```
BOOL myBool = YES;
if (myBool == YES) {
    NSLog(@"The value is true.");
} else {
    NSLog(@"The value is false.");
}
```

```
BOOL myBool = NO;
if (myBool == YES) {
    NSLog(@"The value is true.");
} else {
    NSLog(@"The value is false.");
}
```

Note that `YES` and `NO` are defined as `typedef`'d versions of `true` and `false` in Objective-C.