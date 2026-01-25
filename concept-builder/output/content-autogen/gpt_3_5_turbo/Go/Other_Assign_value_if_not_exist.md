In Go, you can assign a value if it does not exist using the following syntax:

```
if _, ok := myMap[key]; !ok {
    myMap[key] = value
}
```

This assigns the value `value` to the key `key` in the `myMap` map only if that key does not already exist in the map.

Here's an example:

```
myMap := make(map[string]string)

// You can assign a value to a key in myMap
myMap["key1"] = "value1"

// Now let's try to assign a value to "key1" again
if _, ok := myMap["key1"]; !ok {
    myMap["key1"] = "new_value1"
}

// "key1" already exists, so its value should be unchanged
fmt.Println("myMap['key1']: ", myMap["key1"]) // Output: myMap['key1']: value1

// Let's try again with a new key
if _, ok := myMap["key2"]; !ok {
    myMap["key2"] = "value2"
}

// "key2" does not exist yet, so its value should be added to myMap
fmt.Println("myMap['key2']: ", myMap["key2"]) // Output: myMap['key2']: value2
```

In this example, `"key1"` already exists in `myMap`, so it is not assigned a new value. However, since `"key2"` does not exist yet, it is assigned the value `"value2"`.