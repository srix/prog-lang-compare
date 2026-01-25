In Objective-C, we can iterate over an array using different approaches such as for loop, while loop, and for-each loop. Here are some examples of iterating over an array in Objective-C using these approaches:

1. For Loop:

```objective-c
NSArray *arr = @[@"apple", @"banana", @"mango", @"orange"];

for (int i = 0; i < [arr count]; i++) {
    NSString *fruit = [arr objectAtIndex:i];
    NSLog(@"%@", fruit);
}
```

2. While Loop:

```objective-c
NSArray *arr = @[@"apple", @"banana", @"mango", @"orange"];

int i = 0;
while (i < [arr count]) {
    NSString *fruit = [arr objectAtIndex:i];
    NSLog(@"%@", fruit);
    i++;
}
```

3. For-each Loop:

```objective-c
NSArray *arr = @[@"apple", @"banana", @"mango", @"orange"];

for (NSString *fruit in arr) {
    NSLog(@"%@", fruit);
}
```

All these approaches are useful for iterating over any Objective-C array.