To get the unique elements of an NSArray in Objective-C, you can use an NSOrderedSet. Here is an example code snippet:

```
NSArray *myArray = @[@1, @2, @3, @1, @4, @2];
NSOrderedSet *myOrderedSet = [NSOrderedSet orderedSetWithArray:myArray];
NSArray *uniqueArray = [myOrderedSet array];
NSLog(@"%@", uniqueArray);
```

Output: [1, 2, 3, 4]

Explanation:

1. First, we create an array with some duplicate elements. 
2. Then we create an NSOrderedSet using the array. Since an ordered set only contains unique elements, this effectively removes the duplicates. 
3. We extract an NSArray from the ordered set, giving us our unique elements. 
4. Finally, we log the resulting array to the console.