In Kotlin, the `break` statement is used to prematurely terminate a loop. When executed, it causes the program control to exit the loop immediately. Here is the syntax of using the `break` statement in Kotlin:

```
loop@ for (i in 1..5) {
    for (j in 1..5) {
        if (i == 3 && j == 3) {
            break@loop
         }
        println("i = $i, j = $j")
    }
}
```

The `break` keyword with an optional label is used above to terminate the outer loop once the inner loop comes to the coordinate (3, 3).

One important thing to keep in mind is that the label must be a valid Kotlin identifier followed by an @ symbol, like in the example. Here's another example using `break` in a `while` loop:

```
var i = 0
while (i < 10) {
    println("i = $i")
    i++
    if (i == 5) {
        break
    }
}
```

In this example, the `break` statement is used to stop the `while` loop when the value of `i` becomes equal to 5.