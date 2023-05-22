To iterate over a hash in Objective-C, we can use fast enumeration or a basic for loop. Here are the examples of both methods:

**Fast Enumeration:**

```objective-c
// Declare a new hash table
NSDictionary *hashTable = @{@"key1": @"value1", @"key2": @"value2", @"key3": @"value3"};

// Loop through the hash table
for (NSString *key in hashTable) {
    NSString *value = hashTable[key];
    NSLog(@"Key: %@, Value: %@", key, value);
}
```

**For loop:**

```objective-c
// Declare a new hash table
NSDictionary *hashTable = @{@"key1": @"value1", @"key2": @"value2", @"key3": @"value3"};

// Get all the keys using allKeys
NSArray *allKeys = [hashTable allKeys];

// Loop through the keys and get each value
for (int i = 0; i < [allKeys count]; i++) {
    NSString *key = allKeys[i];
    NSString *value = [hashTable valueForKey:key];
    NSLog(@"Key: %@, Value: %@", key, value);
}
```

Both of these methods achieve the same result. The first method is shorter and more concise, but the second method gives you more control over the iteration and access to the keys if you need them.