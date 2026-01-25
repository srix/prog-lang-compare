To concatenate two arrays in Objective-C, you can use the `arrayByAddingObjectsFromArray:` method of an `NSArray`. Here is an example:

```objc
NSArray *array1 = @[@"apple", @"banana", @"cherry"];
NSArray *array2 = @[@"date", @"elderberry", @"fig"];

NSArray *concatenatedArray = [array1 arrayByAddingObjectsFromArray:array2];

// concatenatedArray now contains: @[@"apple", @"banana", @"cherry", @"date", @"elderberry", @"fig"]
```

In this example, `arrayByAddingObjectsFromArray:` is called on `array1` with `array2` passed as the argument. The returned value (`concatenatedArray`) contains all the objects from `array1` followed by all the objects from `array2`.