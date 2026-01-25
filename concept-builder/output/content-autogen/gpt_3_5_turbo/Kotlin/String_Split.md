Sure, here's how to split a string into substrings using Kotlin:

In Kotlin, we can split a string using the `split()` function. The `split()` function takes a delimiter as an argument, and returns an array of substrings.

Here's an example:

```Kotlin
val str = "Hello, World!"
val array = str.split(", ") // Split the string by comma and space

println(array[0]) // Output "Hello"
println(array[1]) // Output "World!"
```

In this example, we first created a string `str` and then split it into an array of substrings using the `split()` function. We passed `, ` as the delimiter to the `split()` function, which means that the string will be split wherever there's a comma followed by a space.

Finally, we printed out the first and second elements of the resulting array to make sure that our string was split correctly.

You can also split a string using a regular expression as the delimiter. Here's an example:

```Kotlin
val str = "apple,banana,grape"
val array = str.split(Regex(",")) // Split the string using a regular expression

println(array[0]) // Output "apple"
println(array[1]) // Output "banana"
println(array[2]) // Output "grape"
```

In this example, we split a string `str` using a regular expression that matches all commas. To create a regular expression, we used the `Regex()` function and passed `,` as the argument.

Note that in both examples, the `split()` function returns an array of substrings. To access a particular substring, we used array indexing (`array[0]`, `array[1]`, etc.).