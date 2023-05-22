In Scala, "for" is a powerful language construct used for iterating over a sequence of elements, such as an array or a list. The "for" loop syntax in Scala is similar to other programming languages like Java, C++, and Python. However, it allows for more advanced operations such as filtering, mapping, and flat-mapping.

Here are some examples of how to use for in Scala:

1. For loop to iterate over a range:

```
for (i <- 1 to 5) {
  println(i)
}
```
This will output:
```
1
2
3
4
5
```

2. For loop to iterate over an array of integers:
```
val myArray = Array(1, 2, 3, 4, 5)
for (i <- myArray) {
  println(i)
}
```
This will output:
```
1
2
3
4
5
```

3. For loop with if condition to filter even numbers:
```
for (i <- 1 to 5 if i % 2 == 0) {
  println(i)
}
```
This will output:
```
2
4
```

4. For loop to generate pairs of numbers:
```
for (i <- 1 to 3; j <- 1 to 2) {
  println(i, j)
}
```
This will output:
```
(1,1)
(1,2)
(2,1)
(2,2)
(3,1)
(3,2)
```

5. For loop with yield to produce a new collection:
```
val myArray = Array(1, 2, 3, 4, 5)
val result = for (i <- myArray) yield i * 2
println(result.mkString(", "))
```
This will output:
```
2, 4, 6, 8, 10
```

In summary, "for" is a versatile construct in Scala that can be used to simplify and streamline many programming tasks involving iteration.