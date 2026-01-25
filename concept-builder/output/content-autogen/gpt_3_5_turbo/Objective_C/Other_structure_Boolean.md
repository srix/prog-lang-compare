In Objective-C, `BOOL` is a data type keyword that represents a boolean value. It can have either a `YES` (true) or `NO` (false) value. 

Here are some examples of how to use boolean in Objective-C:

Example 1: 

```objective-c
BOOL isTrue = YES;
if (isTrue) {
    NSLog(@"The value is true");
} else {
    NSLog(@"The value is false");
}
```

This code declares a `BOOL` variable named `isTrue` and assigns a `YES` value to it. Then it checks if the value is true using an `if` statement and logs the appropriate message.

Example 2:

```objective-c
- (BOOL)isEvenNumber:(NSInteger)number {
    return (number % 2 == 0);
}

// Example usage:
BOOL result = [self isEvenNumber:4];
if (result) {
    NSLog(@"The number is even");
} else {
    NSLog(@"The number is odd");
}
```

In this example, we have defined a function named `isEvenNumber` that takes an integer parameter and returns a boolean value. The function checks if the number is even and returns `YES` if it is, otherwise it returns `NO`. We call this function with `4` as the parameter, which returns `YES`, so the code logs "The number is even".

Example 3:

```objective-c
BOOL hasPassword = [password length] > 0;
if (!hasPassword) {
    NSLog(@"Please enter a password");
}
```

This code checks if the `password` variable has a length greater than zero, which means it has a value. If it does not have a value (`hasPassword` is `NO`), it logs a message asking the user to enter a password.

These are just a few examples of how to use boolean in Objective-C. Boolean values are very useful for logic and control flow statements in programming.