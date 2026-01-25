In Objective-C, we can throw an exception using the `@throw` keyword. We need to enclose the code that might raise an exception in a `@try` block. If an exception occurs in the `@try` block, the control is transferred to the corresponding `@catch` block.

Here's an example:

```
@try {
    // code that might throw an exception
    if (someCondition) {
        @throw [NSException exceptionWithName:@"SomeException" reason:@"A reason for the exception" userInfo:nil];
    }
}
@catch (NSException *exception) {
    // Handle the exception here
    NSLog(@"Exception name: %@ reason: %@", [exception name], [exception reason]);
}
@finally {
    // This block is optional and is executed regardless of whether an exception was thrown or not
}
```

In this example, if `someCondition` is true, an exception of type `NSException` is thrown. The exception contains a name, a reason (a string describing the exception), and optional user information. The `@catch` block handles the exception. The `@finally` block is optional and contains code that is executed regardless of whether an exception was thrown or not.