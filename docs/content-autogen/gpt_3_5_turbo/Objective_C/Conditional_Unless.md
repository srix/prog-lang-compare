In Objective-C, `unless` can be used as a keyword to specify a code block that should be executed only if a certain condition is not met. The syntax for using `unless` is similar to that of `if`, with the only difference being the keyword used.

Here are some examples:

1. `unless` to check if a number is negative:

```
int num = -5;
unless (num < 0) {
    NSLog(@"The number is positive or zero");
}
```

This will not execute because `num` is negative.

2. `unless` to check if an array is empty:

```
NSArray *myArray = @[];
unless ([myArray count] == 0) {
    NSLog(@"The array is not empty");
}
```

This will not execute because `myArray` is empty.

3. `unless` to check if a string is not nil:

```
NSString *myString = nil;
unless (myString != nil) {
    NSLog(@"The string is nil");
}
```

This will execute because `myString` is nil.

Note that in Objective-C, `unless` is not a built-in keyword like `if`. It is actually defined as a preprocessor macro:

```
#define unless(x) if(!(x))
``` 

This macro simply negates the expression inside the parentheses and provides it to the `if` statement.