Sure, in Swift, you can remove leading and trailing whitespaces from a string using the `trimmingCharacters(in:)` method. The `in` parameter takes in a `CharacterSet`, which you can use to specify which characters you want to trim from the string.

Here's an example:

```
let str = "   Hello, World!    "
let trimmedStr = str.trimmingCharacters(in: .whitespaces)
print(trimmedStr) // Output: "Hello, World!"
```

In this example, we first define a string `str` which has leading and trailing whitespaces. We then call the `trimmingCharacters(in:)` method and pass in the `whitespaces` `CharacterSet` to trim the whitespaces. The resulting string is stored in `trimmedStr` and printed using the `print()` method, which outputs `Hello, World!` without the leading and trailing whitespaces.