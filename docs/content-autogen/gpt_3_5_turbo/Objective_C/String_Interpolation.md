In Objective-C, you can interpolate strings using the format string syntax with the `%@` placeholder to denote where the interpolated string should go. Here's an example:

```
NSString *name = @"John";
NSString *greeting = [NSString stringWithFormat:@"Hello, %@!", name];
NSLog(@"%@", greeting); // Output: Hello, John!
```

In the example above, the `stringWithFormat:` method is used to create a new string by formatting the string with the `%@` placeholder, which will be replaced with the value of the `name` variable.

You can also interpolate multiple values by supplying additional arguments to `stringWithFormat:`, like this:

```
NSString *firstName = @"John";
NSString *lastName = @"Doe";
NSString *greeting = [NSString stringWithFormat:@"Hello, %@ %@!", firstName, lastName];
NSLog(@"%@", greeting); // Output: Hello, John Doe!
```

In this example, the `firstName` and `lastName` variables are both included as additional arguments to `stringWithFormat:`, and are interpolated into the resulting string using the `%@` placeholders.