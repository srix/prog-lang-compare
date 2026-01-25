In Objective-C, we can reduce an array to a single value using the `reduce` method. The `reduce` method applies a binary operation (function) to the elements of an array, accumulating the result. The syntax for the `reduce` method is as follows:

```objc
- (id)reduce:(id _Nullable)initialValue withBlock:(id _Nullable (^)(id _Nullable result, id _Nonnull obj))block;
```

The `reduce` method takes an `initialValue` parameter, which is the initial value of the accumulator. The `block` parameter is a block that takes an accumulator and an element of the array and returns a new accumulator value.

Here's an example that uses the `reduce` method to find the sum of the elements in an array:

```objc
NSArray *numbers = @[@1, @2, @3, @4, @5];
NSNumber *sum = [numbers reduce:@0 withBlock:^id _Nullable(id _Nullable result, id _Nonnull obj) {
    return @([result integerValue] + [obj integerValue]);
}];
NSLog(@"The sum is %@", sum); // Output: The sum is 15
```

In the above example, we start the accumulator (`initialValue`) at zero and then use the block to add each element of the array to the accumulator. We return the new accumulator value each time, which is the sum of all the elements in the array.

We can also use the `reduce` method with other binary operations like finding the maximum or minimum value in an array. Here's an example that uses the `reduce` method to find the maximum value in an array:

```objc
NSArray *numbers = @[@1, @3, @5, @2, @4];
NSNumber *max = [numbers reduce:@0 withBlock:^id _Nullable(id _Nullable result, id _Nonnull obj) {
    return @([result integerValue] > [obj integerValue] ? [result integerValue] : [obj integerValue]);
}];
NSLog(@"The maximum value is %@", max); // Output: The maximum value is 5
```

In the above example, we start the accumulator (`initialValue`) at zero and then use the block to compare each element of the array to the accumulator. If the element is greater than the accumulator, we return the element as the new accumulator value. Otherwise, we return the accumulator. The final value of the accumulator is the maximum value in the array.