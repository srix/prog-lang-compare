In Objective-C, you can get the size of an array using the count method. 

Here's an example code snippet:

```
NSArray *myArray = @[@"apple", @"banana", @"cherry"];
NSUInteger count = [myArray count];
NSLog(@"The size of myArray is %lu", count);
```

In the above example, we first declare an array called `myArray` with three string values. Then we use the `count` method to get the size of the array and store it in an unsigned integer variable called `count`. Finally, we use the `NSLog` function to print out the size of the array.

Output:

```
The size of myArray is 3
```

Similarly, you can also get the size of a mutable array by using the count method.

```
NSMutableArray *myMutableArray = [NSMutableArray arrayWithObjects:@"dog", @"cat", @"elephant", nil];
NSUInteger count = [myMutableArray count];
NSLog(@"The size of myMutableArray is %lu", count);
```

Output:

```
The size of myMutableArray is 3
```