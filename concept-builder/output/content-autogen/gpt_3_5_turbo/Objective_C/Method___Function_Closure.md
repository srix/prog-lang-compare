In Objective-C, closures are known as blocks. A block is a chunk of code that can be executed at a later time, either synchronously or asynchronously. It can also be passed as an argument to a function or method, and can capture and use variables from the surrounding scope. 

Here's an example that demonstrates how to use a block to sort an array of strings in ascending order:

```
NSArray *unsortedArray = @[@"apple", @"orange", @"banana", @"pear"];
NSArray *sortedArray = [unsortedArray sortedArrayUsingComparator:^(NSString *string1, NSString *string2) {
    return [string1 compare:string2];
}];

NSLog(@"%@", sortedArray);
```

In this example, the `sortedArrayUsingComparator:` method accepts a block that takes two string arguments and returns an `NSComparisonResult` value. The block contains the sorting logic, which compares the two strings using the `compare:` method. The sorted array is returned and then printed using NSLog.

Here's another example that demonstrates how a block can capture variables from the surrounding scope:

```
NSInteger a = 5;
NSInteger b = 10;

void (^multiply)(void) = ^{
    NSInteger result = a * b;
    NSLog(@"The result is %ld", (long)result);
};

multiply(); // Output: "The result is 50"
```

In this example, a block is defined that multiplies two variables `a` and `b`, which are defined in the same scope. The block captures these values from the surrounding scope and uses them to compute a result, which is printed out using NSLog.

Note that blocks in Objective-C are similar to closures in other languages, but with some differences in syntax and behavior. It's important to understand that blocks are a powerful concept in Objective-C and are used extensively in iOS and OS X development.