In Objective-C, you can add an element to an array using the `addObject:` method of `NSMutableArray`. Here's an example:

```
// create a mutable array and add some initial elements
NSMutableArray *myArray = [NSMutableArray arrayWithObjects:@"Item 1", @"Item 2", nil];

// add a new element to the end of the array
[myArray addObject:@"Item 3"];

// print the updated array
NSLog(@"%@", myArray);
```

In this example, we create a mutable array using the `arrayWithObjects:` method of `NSMutableArray` and add two initial elements to it. Then, we use the `addObject:` method to add a new element `"Item 3"` to the end of the array. Finally, we print the updated array using `NSLog()`.