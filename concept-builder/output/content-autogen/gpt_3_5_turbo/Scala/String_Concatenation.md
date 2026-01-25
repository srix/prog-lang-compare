In Scala, strings can be concatenated using the plus operator `+`. Here's an example:

```scala
val str1 = "Hello"
val str2 = "World"
val str3 = str1 + " " + str2
println(str3) // Output: Hello World
```

In this example, we have defined two variables `str1` and `str2` which contain the strings "Hello" and "World" respectively. We then concatenate them using the `+` operator and store the result in a new variable `str3`. Finally, we print the concatenated string.

We can also concatenate a string with other data types:

```scala
val name = "John"
val age = 30
val info = "My name is " + name + " and I am " + age + " years old."
println(info) // Output: My name is John and I am 30 years old.
```

In this example, we have concatenated a string variable `name` and an integer variable `age` using the `+` operator. The resulting concatenated string is stored in the variable `info` and printed to the console.