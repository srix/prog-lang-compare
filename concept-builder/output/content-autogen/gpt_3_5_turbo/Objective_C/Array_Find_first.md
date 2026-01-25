In Objective-C, arrays are objects in which each element is an object. To find the first element of an array, you can use the `objectAtIndex:` method with an index of 0.

Here's an example:

```objective-c
NSArray *myArray = @[@"apple", @"banana", @"cherry"];
NSString *firstElement = [myArray objectAtIndex:0];
NSLog(@"%@", firstElement); // Output: "apple"
```

In this example, we have an array `myArray` with three elements. We then use the `objectAtIndex:` method to retrieve the first element of the array by passing an index of 0. The resulting string, "apple", is then stored in the variable `firstElement`.

You can also use the shorthand syntax for accessing the first element of an array, which is `array[0]`. Here's an example:

```objective-c
NSArray *myArray = @[@"apple", @"banana", @"cherry"];
NSString *firstElement = myArray[0];
NSLog(@"%@", firstElement); // Output: "apple"
```

Both of these methods will give you the same output: the first element of the `myArray` array, which is "apple".