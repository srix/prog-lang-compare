In Objective-C, the `if` statement is used to execute code based on a certain condition. The general syntax of an `if` statement looks like this:

```
if (condition) {
    // code to execute if condition is true
}
```

The condition inside the parentheses can be any expression that evaluates to a Boolean value (i.e. true or false). Here are some examples:

```
// check if a number is positive
int num = -5;
if (num > 0) {
    NSLog(@"%d is positive", num);
}

// check if a string is empty
NSString *str = @"";
if ([str length] == 0) {
    NSLog(@"The string is empty");
}

// check if two strings are equal
NSString *str1 = @"hello";
NSString *str2 = @"world";
if ([str1 isEqualToString:str2]) {
    NSLog(@"The strings are equal");
}
```

In addition to the basic `if` statement, there are also variants that allow you to execute different code depending on whether the condition is true or false. These are the `if-else` statement and the `if-else if-else` statement. Here are some examples:

```
// check if a number is positive, negative, or zero
int num = -5;
if (num > 0) {
    NSLog(@"%d is positive", num);
} else if (num < 0) {
    NSLog(@"%d is negative", num);
} else {
    NSLog(@"%d is zero", num);
}

// check if a number is even or odd
int num = 7;
if (num % 2 == 0) {
    NSLog(@"%d is even", num);
} else {
    NSLog(@"%d is odd", num);
}
```

The `if` statement can also be nested inside another `if` statement, giving you even more control over the flow of your code. It's important to use proper indentation to make your code readable and easy to follow.