In Go, a hash is called a map. To iterate over a map, we can use the combination of `for range` loop and `range` keyword.

The basic syntax is as follows:

```go
for key, value := range myMap {
    // code block to execute
}
```

Here the `key` variable contains the key of the current iteration and `value` contains the value associated with that key. `myMap` is the map we want to iterate over.

Here is an example:

```go
myMap := map[string]int{
    "apple":  2,
    "banana": 4,
    "pear":   6,
}

for key, value := range myMap {
    fmt.Println(key, ":", value)
}
```
Here, we create a map `myMap` with key-value pairs of strings and integers. We then iterate over the map using `for range` loop and print out each key-value pair using `fmt.Println()` function. The output of this code will be:
```
apple : 2
banana : 4
pear : 6
```

We can also iterate over just the keys or values of the map only by not using the other variable. Here are examples of iterating over just the keys or values of the map:

```go
// iterating over just the keys
for key := range myMap {
    fmt.Println(key)
}

// iterating over just the values
for _, value := range myMap {
    fmt.Println(value)
}
```

In the first example, we iterate over just the keys of the map and print them out. In the second example, we iterate over just the values and print them out.