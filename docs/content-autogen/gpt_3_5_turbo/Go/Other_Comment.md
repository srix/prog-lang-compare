In Go, comments are used to document and explain the purpose of the code. They are not executed by the compiler or interpreter. There are two types of comments available in Go.

1. Single-line comments: A single-line comment begins with two forward slashes (//) and ends at the end of the line.

For example:

```
// This is a single line comment
```

2. Multi-line comments: A multi-line comment starts with /* and ends with */. It can span over multiple lines.

For example:

```
/* This is a multi-line
   comment in Go */
```

Here are some examples of how comments can be used in code:

```
package main

import "fmt"

// This function prints hello world
func helloWorld() {
  fmt.Println("Hello, World!")
}

// This function adds two numbers
func addNumbers(a int, b int) int {
  return a + b
}

/* This is a program that prints
   the sum of two numbers */

func main() {
  // Using single line comments
  fmt.Println("Welcome to Go Programming!") // This is a print statement
  
  /*
    Using multi-line comments
    Now we will add two numbers
  */
  a := 10
  b := 20
  sum := addNumbers(a, b) /* calling addNumbers function
                             to get the sum */
  fmt.Println("The sum of", a, "and", b, "is", sum) // This is a print statement
}
```