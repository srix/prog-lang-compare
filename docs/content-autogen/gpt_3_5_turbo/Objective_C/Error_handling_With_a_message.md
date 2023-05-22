In Objective-C, try/catch/finally is implemented using the @try, @catch and @finally keywords. This allows you to gracefully handle runtime exceptions and errors, allowing your application to recover or fail gracefully.

Here's an example of how to use try/catch/finally with a message:

```
@try {
    // Perform some risky operation that might raise an exception
    [self performRiskyOperation];
}
@catch (NSException *exception) {
    // Handle the exception appropriately
    NSLog(@"An exception occurred: %@", [exception reason]);
}
@finally {
    // Regardless of whether an exception is raised, execute this block of code
    NSLog(@"Finally block executed.");
}
```

In the example above, `performRiskyOperation` is the method that may contain some risky code that could raise an exception. If an exception is caught, the catch block will be executed to handle the exception appropriately. Finally, the finally block will be executed after the try or catch block is complete, regardless of whether or not an exception was caught.

You can modify this example to handle different types of exceptions and to include additional error messaging or error handling as necessary.