To count the number of elements in an array matching a condition in Objective-C, you can use NSPredicate and apply it to the array.

Here's an example:

Suppose you have an array called "numbers" with the following elements:

```
NSArray *numbers = @[@1, @2, @3, @4, @5, @6, @7, @8, @9];
```

And you want to count the number of elements that are greater than 5.

Here's how you can do it:

```
NSPredicate *predicate = [NSPredicate predicateWithFormat:@"SELF > %@", @5];
NSArray *filteredArray = [numbers filteredArrayUsingPredicate:predicate];
NSUInteger count = [filteredArray count];
```

The first line creates an NSPredicate that matches any element in the array that is greater than 5.

The second line applies the predicate to the "numbers" array using the filteredArrayUsingPredicate method, which returns a new array containing only the elements that match the predicate.

Finally, we count the number of elements in the filtered array using the count method.

The "count" variable in this example will be equal to 4, since there are 4 elements in the "numbers" array that are greater than 5.