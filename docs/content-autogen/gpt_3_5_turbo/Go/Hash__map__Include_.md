In Go, we can check if a hash (also called a map) includes a specific key using the `map[key]` syntax. This returns two values: the value associated with the key, and a boolean flag indicating whether the key exists in the map.

Here's an example:

```go
package main

import "fmt"

func main() {
    // create a map with string keys and int values
    scores := map[string]int{
        "Alice": 15,
        "Bob":   23,
        "Carl":  42,
    }

    // check if the map contains a key
    if score, ok := scores["Bob"]; ok {
        fmt.Printf("Bob's score is %d\n", score)
    } else {
        fmt.Println("Bob's score is not available")
    }

    // check if the map contains a key that doesn't exist
    if score, ok := scores["Dave"]; ok {
        fmt.Printf("Dave's score is %d\n", score)
    } else {
        fmt.Println("Dave's score is not available")
    }
}
```

In this example, we create a map called `scores` with string keys and int values. We then check if the map contains the key `"Bob"` using the `scores["Bob"]` syntax. Since `"Bob"` exists in the map, we print his score of 23.

We also check for the key `"Dave"`, which doesn't exist in the map. In this case, the boolean flag `ok` is set to `false`, and we print an error message indicating that `Dave`'s score is not available.