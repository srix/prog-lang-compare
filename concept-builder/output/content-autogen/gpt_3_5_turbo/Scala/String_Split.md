In Scala, you can split a string using the `split()` method, which returns an array of substrings based on the delimiter specified. 

Here's an example:

```scala
val str:String = "Splitting, a string, in Scala"
val delimiter:String = ","

// Splitting the string using the delimiter
val substrings:Array[String] = str.split(delimiter)

// Printing the substrings
substrings.foreach { substring =>
  println(substring)
}
```

Output:
```
Splitting
 a string
 in Scala
```

In the example above, we first defined a string `str` and a delimiter `","`. We then used the `split()` method to split the string into an array of substrings, based on the delimiter specified.

We used the `foreach()` method to print each substring, one by one.

Note that the `split()` method also takes an optional second argument, which specifies the maximum number of splits to be made. If not specified, the entire string is split. Here's an example:

```scala
val str:String = "Splitting a string in Scala"
val delimiter:String = " "

// Splitting the string using the delimiter and specifying a maximum of 2 splits
val substrings:Array[String] = str.split(delimiter, 2)

// Printing the substrings
substrings.foreach { substring =>
  println(substring)
}
```

Output:
```
Splitting
a string in Scala
```

In this example, we specified a maximum of 2 splits using the second argument of the `split()` method. As a result, the string was split into only 2 substrings.