Block passing is a technique used in Go to pass a block of instructions as a parameter to a function. This can be useful when you need to execute a set of instructions within a function, but you don't want to repeat that set of instructions each time the function is called.

Here is an example of how to use block passing in Go:

```go
package main

import "fmt"

func main() {
    executeBlock(func() {
        fmt.Println("Executing block...")
    })
}

func executeBlock(block func()) {
    fmt.Println("Beginning execution...")
    block()
    fmt.Println("Ending execution...")
}
```

In this example, we define a function called `executeBlock` that takes one parameter, a function called `block` that has no parameters and no return value. 

In the `main` function, we call `executeBlock` and pass it a "block" of instructions as a parameter. The block is defined as an anonymous function that prints "Executing block..." to the console.

When `executeBlock` is called, it first prints "Beginning execution...", then it calls the block that was passed as a parameter. The block executes, printing "Executing block..." to the console. Finally, `executeBlock` prints "Ending execution..." to the console.

The output of this code will be:

```
Beginning execution...
Executing block...
Ending execution...
```

This example demonstrates how block passing can be used to execute a set of instructions within a function without having to repeat that set of instructions each time the function is called.