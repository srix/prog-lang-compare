In Objective-C, you can assign values to variables using the assignment operator `=`. Here's an example:

```objc
NSString *name = @"John";
```

In the above example, we are assigning the string value `"John"` to a variable named `name`, which is of type `NSString`. 

You can also use conditional statements to assign values based on certain conditions. Here's an example:

```objc
NSInteger a = 10;
NSInteger b = 20;

NSInteger max;

if (a > b) {
    max = a;
} else {
    max = b;
}
```

In the above example, we are assigning the value of either `a` or `b` to the variable `max`, depending on which one is greater. If `a` is greater than `b`, we assign `a` to `max`. Otherwise, we assign `b` to `max`.

You can also use the ternary operator to write this code more concisely:

```objc
NSInteger max = (a > b) ? a : b;
```

In this example, we are assigning the value of either `a` or `b` to the variable `max` based on the condition `a > b`. If the condition is true, we assign `a` to `max`. Otherwise, we assign `b` to `max`.