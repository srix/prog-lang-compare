In Objective-C, you can iterate over an array with indexes using a for loop. Here's an example:

```
NSArray *myArray = @[@"apple", @"banana", @"cherry", @"date"];

for (int i = 0; i < [myArray count]; i++) {
    NSLog(@"Index: %d, Value: %@", i, myArray[i]);
}
```

In this example, we declare an NSArray for `myArray` with four objects. We then iterate over the array using a for loop, using the `[myArray count]` method to determine the number of iterations needed. Inside the loop, we use the `i` variable to track the current index and `myArray[i]` to access the value at that index. We use `NSLog` to print out the index and value at each iteration. 

The output of this code would be:
```
Index: 0, Value: apple
Index: 1, Value: banana
Index: 2, Value: cherry
Index: 3, Value: date
```