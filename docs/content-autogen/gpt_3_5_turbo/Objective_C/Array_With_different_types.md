In Objective-C, you can create an array with different types using the `NSArray` or `NSMutableArray` class. Here's an example:

```objective-c
// Create an array with different types using NSArray
NSArray *mixedArray = @[@"Hello", @42, @YES];

// Create an array with different types using NSMutableArray
NSMutableArray *mutableMixedArray = [NSMutableArray arrayWithObjects:@"World", @3.14, @NO, nil];
```

In the above example, `mixedArray` contains three different types of objects: a string, an integer, and a boolean. Similarly, `mutableMixedArray` contains three different types of objects: a string, a floating-point number, and a boolean.

Note that when creating an NSArray with different types, you can use the `@` syntax to create an array literal. When creating an NSMutableArray, you can use the `arrayWithObjects` method to add objects to the array.