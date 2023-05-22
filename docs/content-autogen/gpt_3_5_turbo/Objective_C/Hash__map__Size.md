In Objective-C, we use `NSHashTable` to create hashes. To get the size of the hash we can use the `count` method on the `NSHashTable` object. Here's an example:

```
// Create a hash table
NSHashTable *myHashTable = [NSHashTable hashTableWithOptions:NSPointerFunctionsStrongMemory];

// Add some objects to the hash table
[myHashTable addObject:@"apple"];
[myHashTable addObject:@"banana"];
[myHashTable addObject:@"cherry"];
[myHashTable addObject:@"orange"];

// Get the size of the hash table
NSUInteger hashSize = [myHashTable count];

// Print the size of the hash table
NSLog(@"Size of hash table is %lu", hashSize);
```

In this example, we create a hash table using `NSHashTable` and add some objects to it. Then we get the size of the hash table using the `count` method and print it using `NSLog`. The output of this code will be "Size of hash table is 4".