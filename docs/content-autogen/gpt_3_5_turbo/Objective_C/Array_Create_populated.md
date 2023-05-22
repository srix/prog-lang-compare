To create an array in Objective-C, you can use the `NSArray` or `NSMutableArray` class. 

Here is an example of how to create an `NSArray` with three elements:

```
NSArray *myArray = @[@"apple", @"banana", @"orange"];
```

In this example, the `@[]` notation is used to create an `NSArray` with three string values. The `*` before the `myArray` variable name denotes that this is a pointer to an object of type `NSArray`.

Here is an example of how to create an `NSMutableArray` with two elements:

```
NSMutableArray *myMutableArray = [NSMutableArray arrayWithObjects:@"cat", @"dog", nil];
```

In this example, the `arrayWithObjects` method of `NSMutableArray` is used to create an `NSMutableArray` with two string values. The `*` before the `myMutableArray` variable name denotes that this is a pointer to an object of type `NSMutableArray`.

Note that the `NSArray` is immutable, which means that once it is created, it cannot be changed. In contrast, `NSMutableArray` is mutable, which means that you can add, remove, or modify elements as needed.