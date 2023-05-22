In Kotlin, the `for` loop is used to iterate over a range of values, arrays, collections, or anything that provides an iterator. 

The syntax to use `for` loop with a step in Kotlin is as follows:

```kotlin
for (i in startValue..endValue step stepValue) {
  // code to be executed
}
```

In the above syntax:

- `startValue` is the initial value of the loop variable
- `endValue` is the final value of the loop variable
- `stepValue` is the increment/decrement value of the loop variable

Here's an example that demonstrates how to use `for` loop with a step:

```kotlin
fun main() {
    // loop from 1 to 10 with a step of 2 and print all the even numbers
    for (i in 1..10 step 2) {
        if (i % 2 == 0) {
            println("$i is even")
        }
    }
}
```

Output:
```
2 is even
4 is even
6 is even
8 is even
10 is even
```

In the above example, the loop starts at 1 and ends at 10 with a step of 2. The loop variable `i` takes the values 1, 3, 5, 7 and 9. The `if` statement inside the loop checks whether `i` is even and if so, prints it to the console.