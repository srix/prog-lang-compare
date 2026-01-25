To run a command in Go, you can use the `exec` package in Go. This package provides functionality to execute external commands and handle their I/O streams.

Here is an example code snippet that shows how to run the command `ls` on Unix/Linux systems:

```go
package main

import (
	"fmt"
	"os/exec"
)

func main() {
	// Create a new command to run "ls"
	cmd := exec.Command("ls")

	// Execute the command and get the output
	output, err := cmd.Output()
	if err != nil {
		fmt.Println(err)
		return
	}

	// Print the output
	fmt.Println(string(output))
}
```

In this example, we first create a new `exec.Cmd` struct and pass the command `ls` to it. We then execute the command using the `Output()` method, which returns the output of the command as a byte slice.

We also check for any errors that may have occurred during the execution of the command and print them out if necessary.

Here's another example that shows how to run the command `echo` with arguments on Unix/Linux systems:

```go
package main

import (
	"fmt"
	"os/exec"
)

func main() {
	// Create a new command to run "echo hello world"
	cmd := exec.Command("echo", "hello", "world")

	// Execute the command and get the output
	output, err := cmd.Output()
	if err != nil {
		fmt.Println(err)
		return
	}

	// Print the output
	fmt.Println(string(output))
}
```

In this example, we pass the command `echo` and its arguments `"hello"` and `"world"` as separate parameters to the `exec.Command()` method. The rest of the code is similar to the previous example.