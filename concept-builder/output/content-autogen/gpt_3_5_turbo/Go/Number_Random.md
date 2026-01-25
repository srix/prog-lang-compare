Go has a `rand` package in its standard library that provides facilities for generating pseudorandom numbers. Here are a few examples of how to generate random numbers in Go:

1. Generating a random integer between 0 and some maximum value:

```go
import (
  "fmt"
  "math/rand"
  "time"
)

func main() {
  max := 100 // maximum value
  rand.Seed(time.Now().UnixNano()) // initialize the random number generator
  num := rand.Intn(max) // generate a random integer between 0 and max-1
  fmt.Println(num)
}
```

2. Generating a random float between 0 and 1:

```go
import (
  "fmt"
  "math/rand"
  "time"
)

func main() {
  rand.Seed(time.Now().UnixNano())
  num := rand.Float64()
  fmt.Println(num)
}
```

3. Generating a random integer within a range:

```go
import (
  "fmt"
  "math/rand"
  "time"
)

func main() {
  min := 1 // minimum value
  max := 10 // maximum value
  rand.Seed(time.Now().UnixNano())
  num := rand.Intn(max - min + 1) + min // generate a random integer between min and max
  fmt.Println(num)
}
```

Note that the `rand.Seed()` function is used to initialize the random number generator with a unique value (in this case, the current time in nanoseconds). This ensures that each run of the program produces a different sequence of random numbers.