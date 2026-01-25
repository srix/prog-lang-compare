In Scala, you can iterate over a hash using different approaches. Here are three different ways:

1. Using a for loop:

```
val ages = Map("Alice" -> 25, "Bob" -> 30, "Charlie" -> 35)

for ((name, age) <- ages) {
  println(s"$name is $age years old")
}
```

This will output:
```
Alice is 25 years old
Bob is 30 years old
Charlie is 35 years old
```

2. Using the foreach method:

```
val ages = Map("Alice" -> 25, "Bob" -> 30, "Charlie" -> 35)

ages.foreach {
  case (name, age) => println(s"$name is $age years old")
}
```

This will output:
```
Alice is 25 years old
Bob is 30 years old
Charlie is 35 years old
```

3. Using the map method:

```
val ages = Map("Alice" -> 25, "Bob" -> 30, "Charlie" -> 35)

ages.map {
  case (name, age) => println(s"$name is $age years old")
}
```

This will output the same as the previous examples:
```
Alice is 25 years old
Bob is 30 years old
Charlie is 35 years old
```

Note that the map method returns a new collection, so if you're not interested in the result, you should use one of the other methods instead.