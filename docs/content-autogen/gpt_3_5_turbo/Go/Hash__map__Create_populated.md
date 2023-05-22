In Go, a hash is known as a map. A map allows you to store key-value pairs in an unordered collection. Here is an example of how to create a simple string to string map:

```
// create a string to string map
m := make(map[string]string)

// add key-value pairs to the map
m["apple"] = "red"
m["banana"] = "yellow"

// retrieve a value from the map
color := m["apple"]
fmt.Println(color) // prints "red"
```

In this example, we create an empty map using the `make` function. We then add two key-value pairs to the map using the syntax `m[key] = value`. Finally, we retrieve the value associated with the key `"apple"` and print it to the console.

Here is another example that shows how to create a map of integers to strings:

```
// create a map of integers to strings
m := map[int]string {
    1: "one",
    2: "two",
    3: "three",
}

// retrieve a value from the map
word := m[2]
fmt.Println(word) // prints "two"
```

In this example, we create a map using a literal syntax with curly braces `{}`. We then add three key-value pairs to the map, where the keys are integers and the values are strings. Finally, we retrieve the value associated with the key `2` and print it to the console.