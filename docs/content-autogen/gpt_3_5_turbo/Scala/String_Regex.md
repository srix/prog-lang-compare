Regex (short for regular expression) is a sequence of characters that define a search pattern. In Scala, regex can be used for pattern matching and manipulation of strings.

Here are some examples:

1. Matching a simple string pattern:

```scala
val pattern = "scala"
val str = "I love Scala"
val isMatched = str.matches(pattern)
println(isMatched) // true
```

2. Matching a pattern with a wildcard:

```scala
val pattern = "sca..a"
val str = "I love Scala"
val isMatched = str.matches(pattern)
println(isMatched) // true
```

In this example, ".." is a wildcard that matches any two characters.

3. Extracting matched strings:

```scala
val pattern = "(sca)(..)"
val str = "I love Scala"
val regex = pattern.r
val matched = regex.findAllMatchIn(str).toList.map(_.group(0))
println(matched) // List(scaLa)
```

In this example, we use the `findAllMatchIn` method to find all matches of the pattern in the string. Then, we use the `group` method to extract the matched string.

4. Replacing matched strings:

```scala
val pattern = "sca"
val replacement = "Java"
val str = "I love Scala"
val result = str.replaceAll(pattern, replacement)
println(result) // I love Java
```

In this example, we use the `replaceAll` method to replace all occurrences of the matched string with a replacement string.

Overall, regex provides a powerful tool for string pattern matching and manipulation in Scala.