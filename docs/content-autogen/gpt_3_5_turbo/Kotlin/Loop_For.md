`For` is an iterator in Kotlin that helps to iterate over a specific range, a collection, an array, or any other iterable object. It allows looping through the data structures in a more concise and readable way. 

Here are some examples of how to use `for` in Kotlin:

1. Looping over a range of numbers:

```
for (i in 0..10) { 
    println(i) 
}
```

Output:
```
0
1
2
3
4
5
6
7
8
9
10
```

2. Looping over a collection:

```
val numbers = listOf(1, 2, 3, 4, 5)
for (num in numbers) {
    println(num)
}
```

Output:
```
1
2
3
4
5
```

3. Looping over an array:

```
val names = arrayOf("John", "Alice", "Bob", "Mary")
for (name in names) {
    println(name)
}
```

Output:
```
John
Alice
Bob
Mary
```

4. Looping over a map:

```
val ages = mapOf("Alice" to 22, "Bob" to 35, "Charlie" to 28)
for ((name, age) in ages) {
    println("$name is $age years old.")
}
```

Output:
```
Alice is 22 years old.
Bob is 35 years old.
Charlie is 28 years old.
```

These are just a few examples of how to use `for` in Kotlin. It can be used with various types of data structures to iterate through them and perform specific operations.