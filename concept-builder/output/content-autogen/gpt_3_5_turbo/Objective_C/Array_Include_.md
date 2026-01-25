To check if an array includes an element in Objective-C, you can use the `containsObject:` method of the `NSArray` class. 

Here is an example:

```objective-c
NSArray *myArray = @[@"apple", @"banana", @"orange"];
if ([myArray containsObject:@"banana"]) {
    NSLog(@"The array contains 'banana'");
} else {
    NSLog(@"The array does not contain 'banana'");
}
```

In this example, the `containsObject:` method checks if the string `"banana"` is present in the `myArray` array. If it is, it returns `YES` and the code inside the `if` block is executed. The output of this code would be:

```
The array contains 'banana'
```