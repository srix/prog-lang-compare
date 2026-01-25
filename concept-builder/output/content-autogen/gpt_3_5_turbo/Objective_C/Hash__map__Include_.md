In Objective-C, you can check whether a hash table (a.k.a. dictionary) includes a certain key by calling the `allKeys` method of the hash table and then checking if the returned array contains the key.

Here's an example code snippet that demonstrates this:

```objective-c
// create a hash table
NSMutableDictionary *hashTable = [NSMutableDictionary dictionary];
[hashTable setObject:@"Value 1" forKey:@"Key 1"];
[hashTable setObject:@"Value 2" forKey:@"Key 2"];

// check if a key exists in the hash table
NSString *keyToCheck = @"Key 2";
NSArray *allKeys = [hashTable allKeys];
if ([allKeys containsObject:keyToCheck]) {
    NSLog(@"The hash table includes the key: %@", keyToCheck);
} else {
    NSLog(@"The hash table does NOT include the key: %@", keyToCheck);
}
```

In this example, we create a hash table with two keys ("Key 1" and "Key 2") and their corresponding values ("Value 1" and "Value 2", respectively). We then check if the key "Key 2" exists in the hash table by calling `allKeys` to get an array of all the keys in the hash table, and then check if this array contains the key "Key 2" using the `containsObject:` method. If the key is found, we print a message saying that the hash table includes the key, and if not, we print a message saying that the hash table does not include the key.