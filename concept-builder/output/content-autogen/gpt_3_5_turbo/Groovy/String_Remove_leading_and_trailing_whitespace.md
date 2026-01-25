Sure, removing leading and trailing whitespaces from a string in Groovy is pretty straightforward. You can use the `trim()` method to remove both leading and trailing whitespaces from a string. Here's an example:

```
def text = "   hello groovy world!   "
def trimmedText = text.trim()
```

In this example, the `text` variable has leading and trailing whitespaces. We use the `trim()` method to remove the whitespaces and store the result in the `trimmedText` variable.

You can also chain multiple methods together to remove other types of whitespace characters, such as tabs and line breaks. Here's an example:

```
def text = "\t   hello\ngroovy world!\t\n"
def trimmedText = text.trim().replaceAll(/[\t\n]/, "")
```

In this example, we use the `trim()` method to remove leading and trailing spaces as well as tabs and line breaks. We then use the `replaceAll` method with a regular expression to remove any tabs and line breaks within the string.

I hope that helps! Let me know if you have any other questions.