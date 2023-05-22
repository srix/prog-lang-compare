To add an element to a hash in Go, you can use the map keyword to create a new map, then use the square brackets with a key to assign a value to it. Here's an example:

```go
// create a new map
myMap := make(map[string]int)

// add values to the hash
myMap["apple"] = 5
myMap["banana"] = 2
myMap["orange"] = 8

// print the hash to see the values
fmt.Println(myMap) // output: map[apple:5 banana:2 orange:8]
```

In this example, we first create a new map with the make() function. Then, we add 3 key-value pairs to the hash using the square brackets notation. Finally, we print the hash using fmt.Println() to see the values.

You can also add elements to an existing map using the same notation. Here's an example:

```go
// define a map with some values
myMap := map[string]int{"apple": 5, "banana": 2, "orange": 8}

// add a new value to the hash
myMap["peach"] = 3

// print the hash to see the new value
fmt.Println(myMap) // output: map[apple:5 banana:2 orange:8 peach:3]
```

In this example, we define a map with 3 key-value pairs. Then, we add a new key-value pair "peach": 3 to the hash using the same square brackets notation. Finally, we print the hash using fmt.Println() to see the new value.