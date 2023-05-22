In Go, to get the value of a specific key in a hash (also known as a map), you can use the syntax: `mapName[keyName]`. Here’s an example:

```go
package main

import "fmt"

func main() {
    // Creating a map
    myMap := map[string]string{"apple": "red", "banana": "yellow", "grape": "purple"}

    // Getting the value of a specific key
    fmt.Println(myMap["apple"]) // Output: red
    fmt.Println(myMap["banana"]) // Output: yellow
    fmt.Println(myMap["grape"]) // Output: purple
}
```

In this example, we created a map with three key-value pairs representing fruits and their colors. We then printed the value of each fruit by calling the map with the corresponding key. The output is the color of each fruit.