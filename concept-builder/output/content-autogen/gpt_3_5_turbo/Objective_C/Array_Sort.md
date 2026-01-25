In Objective-C, arrays can be sorted using the `sortedArrayUsingComparator` method provided by the `NSArray` class. This method takes a comparator block as an argument, which defines the ordering of the array elements. 

Here's an example of sorting an array of integers in ascending order:

```
NSArray *numbers = @[@5, @2, @7, @1, @8];
NSArray *sortedNumbers = [numbers sortedArrayUsingComparator:^NSComparisonResult(id obj1, id obj2) {
    return [obj1 compare:obj2];
}];
NSLog(@"%@", sortedNumbers);  // Output: [1, 2, 5, 7, 8]
```

In this example, the `sortedArrayUsingComparator` method is called on the `numbers` array and passed a comparator block. The block takes two arguments `obj1` and `obj2` of type `id`, representing the elements being compared. The block returns an `NSComparisonResult`, indicating whether `obj1` is less than, equal to, or greater than `obj2`.

The `compare:` method is used to compare the two elements `obj1` and `obj2`. This method is implemented by the `NSNumber` class (since the elements in our array are `NSNumber` objects) and returns an `NSComparisonResult` based on the values of the numbers.

To sort the array in descending order, you can reverse the order of the comparison result in the comparator block:

```
NSArray *numbers = @[@5, @2, @7, @1, @8];
NSArray *sortedNumbers = [numbers sortedArrayUsingComparator:^NSComparisonResult(id obj1, id obj2) {
    return [obj2 compare:obj1];
}];
NSLog(@"%@", sortedNumbers);  // Output: [8, 7, 5, 2, 1]
``` 

This will sort the numbers in the array in descending order.