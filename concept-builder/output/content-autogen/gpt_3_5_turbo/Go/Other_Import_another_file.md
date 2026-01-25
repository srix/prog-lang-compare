In Go, you can import code from another file by using the `import` statement. Here is an example of how to import a file named `example.go` and use a function named `helloWorld` from that file:

```go
package main

import (
	"fmt"
	"./example"
)

func main() {
	fmt.Println(example.HelloWorld())
}
```

In the above example, the `import` statement is used to import the `example` package, which is defined in a file named `example.go`. The file `example.go` contains the code for the `HelloWorld` function, which can be used in the main function of the current file.

Here is an example of what the `example.go` file might look like:

```go
package example

func HelloWorld() string {
	return "Hello, World!"
}
```

This file defines a function named `HelloWorld` that simply returns the string "Hello, World!".