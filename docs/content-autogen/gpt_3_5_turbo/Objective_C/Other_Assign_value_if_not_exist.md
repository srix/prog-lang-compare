In Objective-C, you can assign a value only if it does not already exist in a dictionary, by using the `setObject:forKey:` method of `NSMutableDictionary`.

Here is an example:

```
NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
NSString *key = @"Key1";
NSString *value = @"Value1";

// Check if the key already exists in the dictionary
if ([dict objectForKey:key] == nil) {
    // If the key does not exist, add the value
    [dict setObject:value forKey:key];
}
```

In this example, we first create an empty dictionary called `dict`. We then define a key called `Key1` and a value called `Value1`. We check if the `Key1` already exists in the `dict` using the `objectForKey:` method. If it returns `nil`, we use the `setObject:forKey:` method to add the key-value pair to the dictionary. If the `Key1` already exists in the dictionary, we do not do anything.