In Objective-C, you can create a hash using an NSDictionary object. NSDictionary is an object that stores key-value pairs. Here's an example of creating a hash with three key-value pairs:

```
NSDictionary *myHash = @{@"name": @"John", @"age": @30, @"city": @"New York"};
```

This creates a dictionary with three keys - "name", "age", and "city", and their respective values - "John", 30, and "New York". You can access the values using the keys like this:

```
NSString *name = myHash[@"name"];
NSNumber *age = myHash[@"age"];
NSString *city = myHash[@"city"];
```

This will retrieve the values for the respective keys and store them in variables. You can also iterate over the keys and values using a for-loop like this:

```
for (NSString *key in myHash) {
    id value = myHash[key];
    NSLog(@"Key: %@, Value: %@", key, value);
}
```

This will print out all the key-value pairs in the hash. Note that the "id" data type is used to store the value because the value can be of any data type.