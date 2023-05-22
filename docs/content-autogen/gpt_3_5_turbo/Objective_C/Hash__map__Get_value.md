In Objective-C, you can get the value of a specific key of a hash (NSDictionary) using the `objectForKey:` method. Here is an example:

```objective-c
NSDictionary *myDict = @{ @"key1": @"value1", @"key2": @"value2", @"key3": @"value3" };
NSString *valueForKey2 = [myDict objectForKey:@"key2"];
NSLog(@"The value for key2 is: %@", valueForKey2);
```

In the above example, we create an NSDictionary object named `myDict` with three key-value pairs. We then use the `objectForKey:` method to get the value associated with the key "key2" and store it in a variable named `valueForKey2`. Finally, we print the value of `valueForKey2` using NSLog.

The output of the above code will be:

```
The value for key2 is: value2
```

Alternatively, you can also use the modern Objective-C syntax using the square bracket notation for accessing elements:

```objective-c
NSDictionary *myDict = @{ @"key1": @"value1", @"key2": @"value2", @"key3": @"value3" };
NSString *valueForKey2 = myDict[@"key2"];
NSLog(@"The value for key2 is: %@", valueForKey2);
```

The output of this code will be the same as the previous example.