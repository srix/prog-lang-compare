In Go, destructuring assignment allows us to extract values from composite data types like arrays, slices, and maps and assign them to variables in a concise way. Here are some examples:

1. Destructuring an array

```
arr := [3]int{1, 2, 3}

// Destructure the array into individual variables
a, b, c := arr[0], arr[1], arr[2]

// The same thing using destructuring assignment
a, b, c := arr[0], arr[1], arr[2]
```

2. Destructuring a slice

```
slice := []string{"apple", "banana", "cherry"}

// Destructure the slice into individual variables
a, b, c := slice[0], slice[1], slice[2]

// The same thing using destructuring assignment
a, b, c := slice[0], slice[1], slice[2]
```

3. Destructuring a map

```
m := map[string]int{"one": 1, "two": 2, "three": 3}

// Destructure the map into individual variables
a := m["one"]
b := m["two"]
c := m["three"]

// The same thing using destructuring assignment
a, b, c := m["one"], m["two"], m["three"]
```

In addition, Go also allows us to use blank identifiers (`_`) to ignore values that we don't want to assign to variables. Here's an example:

```
slice := []int{1, 2, 3, 4, 5}

// We only want the first and last elements of the slice
first, _, _, _, last := slice[0], slice[1], slice[2], slice[3], slice[4]

// The same thing using destructuring assignment
first, _, _, _, last := slice[0], _, _, _, slice[4]
```