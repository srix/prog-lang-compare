To replace a substring within a string in Scala, you can use the `replace` function or the `replaceAll` function.

The `replace` function takes two parameters: the first parameter is the substring to be replaced, and the second parameter is the replacement substring. The function returns a new string with the specified substring replaced.

Here's an example:

```
val str = "Hello, World!"
val newStr = str.replace("World", "Scala")
println(newStr)
```

Output: `Hello, Scala!`

The `replaceAll` function takes two parameters: the first parameter is a regular expression that matches the substring(s) to be replaced, and the second parameter is the replacement substring. The function returns a new string with the specified substring(s) replaced.

Here's an example:

```
val str = "The quick brown fox jumps over the lazy dog"
val newStr = str.replaceAll("o", "@")
println(newStr)
```

Output: `The quick br@wn f@x jumps @ver the lazy d@g`