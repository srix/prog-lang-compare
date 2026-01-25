In Swift, we can add an element to a hash by updating its key-value pair. Here's an example:

```
var namesAndAges = ["John": 28, "David": 25, "Sarah": 30]
```

To add a new element to this hash, we can simply set a new key-value pair:

```
namesAndAges["Olivia"] = 35
```

Now the hash will look like this:

```
["John": 28, "David": 25, "Sarah": 30, "Olivia": 35]
```

We can also use the `updateValue(_:forKey:)` method to add an element to the hash. Here's an example:

```
namesAndAges.updateValue(32, forKey: "Michael")
```

This will add a new key-value pair to the hash:

```
["John": 28, "David": 25, "Sarah": 30, "Olivia": 35, "Michael": 32]
```

Note that if the key already exists in the hash, the `updateValue(_:forKey:)` method will update its value instead of adding a new key-value pair.