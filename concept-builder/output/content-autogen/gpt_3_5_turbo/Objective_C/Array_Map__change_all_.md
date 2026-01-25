To change all the elements of an array in Objective-C, you need to iterate over each element of the array and replace it with a new value.

Here's an example:

```
NSMutableArray *myArray = [[NSMutableArray alloc] initWithObjects:@"apple", @"banana", @"orange", nil];
```

In the above code, we have created an NSMutableArray named `myArray` with some initial values.

Now, let's say we want to change all the elements of this array to uppercase. We can achieve this by iterating over each element and using the `uppercaseString` method of NSString to convert each element to uppercase.

```
for (int i = 0; i < [myArray count]; i++) {
    NSString *originalString = [myArray objectAtIndex:i];
    NSString *uppercaseString = [originalString uppercaseString];
    [myArray replaceObjectAtIndex:i withObject:uppercaseString];
}

NSLog(@"%@", myArray);
```

In the above code, we are using a for loop to iterate over each element of `myArray`. For each element, we are retrieving the original string using the `objectAtIndex` method, converting it to uppercase using `uppercaseString`, and replacing the original string with the uppercase string using the `replaceObjectAtIndex` method.

After all the elements have been converted to uppercase, we simply print the modified array using the `NSLog` statement.

Output:
```
(
    APPLE,
    BANANA,
    ORANGE
)
```