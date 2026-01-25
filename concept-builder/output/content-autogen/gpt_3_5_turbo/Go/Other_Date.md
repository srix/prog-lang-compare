In Go, the `time` package is used for working with dates and times. Here are some examples on how to use dates in Go:

1. Getting the Current Date and Time:
```
package main

import (
	"fmt"
	"time"
)

func main() {
	currentTime := time.Now()
	fmt.Println("Current Time: ", currentTime)
}
```

2. Formatting a Date:
```
package main

import (
	"fmt"
	"time"
)

func main() {
	currentTime := time.Now()
	formattedTime := currentTime.Format("01-02-2006") // MM-DD-YYYY
	fmt.Println("Formatted Time: ", formattedTime)
}
```

3. Parsing a Date:
```
package main

import (
	"fmt"
	"time"
)

func main() {
	dateString := "2022-12-31"
	parsedDate, _ := time.Parse("2006-01-02", dateString) // YYYY-MM-DD
	fmt.Println("Parsed Date: ", parsedDate)
}
```

4. Adding or Subtracting Time:
```
package main

import (
	"fmt"
	"time"
)

func main() {
	currentTime := time.Now()
	afterOneHour := currentTime.Add(time.Hour * 1)
	beforeOneDay := currentTime.AddDate(0, 0, -1)
	fmt.Println("Current Time: ", currentTime)
	fmt.Println("After One Hour: ", afterOneHour)
	fmt.Println("Before One Day: ", beforeOneDay)
}
```

These are some basic examples on how to use dates in Go using the `time` package.