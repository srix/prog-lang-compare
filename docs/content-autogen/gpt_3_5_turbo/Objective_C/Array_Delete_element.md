In Objective-C, you can delete an element from an array by using some built-in methods provided by the NSMutableArray class. There are several ways to remove an element from an array depending on the specific requirements of your code. Here are a few examples:

1. Remove objects at a particular index:
```
NSMutableArray *myArray = [@[@"A", @"B", @"C", @"D"] mutableCopy];
[myArray removeObjectAtIndex:2];
```
In this example, the third element "C" is removed from the array by using the `removeObjectAtIndex` method on the mutable array.

2. Remove the last object in the array:
```
NSMutableArray *myArray = [@[@"A", @"B", @"C", @"D"] mutableCopy];
[myArray removeLastObject];
```
In this example, the last object "D" is removed from the array by using the `removeLastObject` method on the mutable array.

3. Remove all objects in the array:
```
NSMutableArray *myArray = [@[@"A", @"B", @"C", @"D"] mutableCopy];
[myArray removeAllObjects];
```
In this example, all objects in the array are removed by using the `removeAllObjects` method on the mutable array.

It's important to note that when removing an element from an array, the indexes of the remaining elements will shift to fill the gap left by the removed element. So, if you remove an element at index 2, the element that used to be at index 3 will now be at index 2.