In Objective-C, we can provide default values for some or all arguments in a method or function. If no value is given for an argument, the default value will be used.

Here is an example of a method in Objective-C that uses a default value for an argument:

```
- (void)printGreetings:(NSString *)name timeOfDay:(NSString *)time {
  if (time == nil) {
    time = @"day";
  }
  NSLog(@"Good %@, %@", time, name);
}
```

In this method, the `timeOfDay` argument has a default value of `nil`. If no value is provided for `timeOfDay`, the default value of `nil` will be used. 

So, when calling this method, we can either provide a value for `timeOfDay` or not:

```
// Providing a value for the timeOfDay argument
[self printGreetings:@"John" timeOfDay:@"morning"];

// Not providing a value for the timeOfDay argument and letting the default value of nil be used
[self printGreetings:@"Jane"];
```

In the first call to the method, the value of "morning" will be used for `timeOfDay`. In the second call, the default value of nil will be used for `timeOfDay`.

Therefore, using default values for arguments can make our code more flexible and easy to read, allowing us to provide reasonable default values for methods or functions when needed.