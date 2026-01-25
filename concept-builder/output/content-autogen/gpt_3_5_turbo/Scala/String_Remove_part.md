In Scala, to remove a part of a string you can make use of the `replace` or `replaceAll` methods. 

The `replace` method replaces all occurrences of a given substring with another substring. For example,

```scala
val str = "I love Scala programming"
val newStr = str.replace("love", "like")
println(newStr) //I like Scala programming
```

The `replaceAll` method replaces all occurrences of a regular expression with a given replacement string. For example,

```scala
val str = "The quick brown fox jumps over the lazy dog"
val newStr = str.replaceAll("the|The", "")
println(newStr) // quick brown fox jumps  over  lazy dog
```

In the above example, we pass the regular expression `"the|The"` to remove all occurrences of the words "the" or "The" from the string.

You can also use the `substring` method to remove a part of the string by specifying the start index and end index. For example,

```scala
val str = "This is a sample string"
val newStr = str.substring(5, 11)
println(newStr) //is a sa
```

In the example above, by specifying the start index as 5 and the end index as 11, we removed the substring "This " from the original string.