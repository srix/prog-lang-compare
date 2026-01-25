To get the first and last element of an array in Objective-C, you can use the `firstObject` and `lastObject` methods of the `NSArray` class. Here are some examples:

Example 1: Getting the first element
```objective-c
NSArray *myArray = @[@"apple", @"banana", @"orange"];
NSString *firstElement = [myArray firstObject];
NSLog(@"The first element is %@", firstElement);
```
Output: The first element is apple

Example 2: Getting the last element
```objective-c
NSArray *myArray = @[@"apple", @"banana", @"orange"];
NSString *lastElement = [myArray lastObject];
NSLog(@"The last element is %@", lastElement);
```
Output: The last element is orange

Note that if the array is empty, both `firstObject` and `lastObject` methods will return `nil`. It's always a good practice to check for that before using the elements.