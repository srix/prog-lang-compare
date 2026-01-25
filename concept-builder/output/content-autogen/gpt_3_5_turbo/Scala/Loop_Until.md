In Scala, the `until` keyword is used to iterate over a range of values until a certain condition is met. It is similar to the `to` keyword in Scala, with the only difference being that the endpoint value is excluded from the range. Here are some examples of how to use `until` in Scala:

Example 1: Iterate from 0 until 5

```scala
for (i <- 0 until 5) {
  println(s"Value of i: $i")
}
```

Output:
```
Value of i: 0
Value of i: 1
Value of i: 2
Value of i: 3
Value of i: 4
```

In this example, the loop iterates over a range of values from 0 until 5 (exclusive) using the `until` keyword.

Example 2: Calculate the sum of all even numbers between 1 and 10

```scala
var sum = 0
for (i <- 1 until 10; if i % 2 == 0) {
  sum += i
}
println(s"Sum of even numbers between 1 and 10: $sum")
```

Output:
```
Sum of even numbers between 1 and 10: 20
```

In this example, the `for` loop iterates over a range of values from 1 until 10 (exclusive). The `if` statement inside the loop checks if each value is even. If the value is even, it is added to the `sum` variable. Finally, the sum is printed to the console.

Example 3: Iterate over a string until a certain character is found

```scala
val message = "Hello, world!"
for (c <- message until ',') {
  println(c)
}
```

Output:
```
H
e
l
l
o
```

In this example, the `for` loop iterates over each character in the `message` string until the `,` character is found (exclusive). The `println` statement prints each character to the console.