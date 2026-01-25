To call a method in a class in Objective-C, you need to create an instance (object) of that class and then call the method using the dot notation or square bracket notation.

Here's an example:

Suppose you have a class called `Calculator` with a method called `addNumbers` that takes two integers as input and returns their sum:

```objective-c
@interface Calculator : NSObject

- (int)addNumbers:(int)num1 with:(int)num2;

@end

@implementation Calculator

- (int)addNumbers:(int)num1 with:(int)num2 {
    return num1 + num2;
}

@end
```

To call this method, you need to first create an instance of the `Calculator` class:

```objective-c
Calculator *myCalculator = [[Calculator alloc] init];
```

Then, you can call the `addNumbers` method on the `myCalculator` object using either dot notation or square bracket notation:

```objective-c
int sum = [myCalculator addNumbers:5 with:10];
NSLog(@"The sum is: %d", sum);

// or

int sum = myCalculator.addNumbers(5, 10);
NSLog(@"The sum is: %d", sum);
```

Both of these will call the `addNumbers` method on the `myCalculator` object, passing in the two integers 5 and 10, and returning their sum, which will be stored in the `sum` variable. The result will then be printed to the console using `NSLog`.