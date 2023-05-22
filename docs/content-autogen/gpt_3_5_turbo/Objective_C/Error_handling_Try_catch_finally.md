In Objective-C, try/catch/finally is used to handle exceptions. The try block contains the code that might generate an exception, the catch block is used to catch the exception, and the finally block is used to execute code that should be run regardless of whether an exception was thrown or not.

Here’s an example of how to use try/catch/finally:

```
@try {
    // Code that may throw an exception
}
@catch (NSException *exception) {
    // Catch the exception and handle it
    NSLog(@"Exception caught: %@", exception);
}
@finally {
    // Code that should always be executed
}
```

Here’s another example that demonstrates how to catch a specific type of exception:

```
@try {
    NSArray *array = @[@"One", @"Two", @"Three"];
    NSString *element = [array objectAtIndex:5]; // This will throw an NSRangeException
}
@catch (NSRangeException *exception) {
    NSLog(@"Range exception caught: %@", exception);
}
@finally {
    NSLog(@"Finally block executed");
}
```

In this example, we know that the code may throw an NSRangeException, so we use @catch (NSRangeException *exception) to catch that specific type of exception.

It’s important to note that using try/catch/finally should be done sparingly. It’s usually better to handle errors and exceptions using other methods such as NSError or returning values instead of throwing exceptions. Exceptions should only be used for exceptional situations that can’t be handled in any other way.