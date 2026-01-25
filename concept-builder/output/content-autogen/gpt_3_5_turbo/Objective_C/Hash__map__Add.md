To add an element to a hash in Objective-C, you can use the `setObject:forKey:` method of the `NSMutableDictionary` class. Here's an example:

```objective-c
NSMutableDictionary *myHash = [[NSMutableDictionary alloc] init];

// Add a new element to the hash with key-value pair
[myHash setObject:@"value" forKey:@"key"];
```

In this example, a new `NSMutableDictionary` object is created and stored in the variable `myHash`. The `setObject:forKey:` method is then used to add a new element to the hash, with key `"key"` and value `"value"`.

You can also add multiple elements to the hash at once using the `addEntriesFromDictionary:` method. Here's an example:

```objective-c
NSMutableDictionary *myHash = [[NSMutableDictionary alloc] init];

// Add multiple key-value pairs to the hash
NSDictionary *newEntries = @{@"key1": @"value1", @"key2": @"value2"};
[myHash addEntriesFromDictionary:newEntries];
```

In this example, the `addEntriesFromDictionary:` method is used to add multiple key-value pairs to the hash at once, via an `NSDictionary` object `newEntries`. The hash now contains two elements with keys `"key1"` and `"key2"`, and corresponding values `"value1"` and `"value2"`.