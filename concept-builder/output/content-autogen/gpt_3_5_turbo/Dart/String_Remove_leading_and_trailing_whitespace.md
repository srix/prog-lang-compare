In Dart, you can remove leading and trailing whitespaces from a string using the `trim()` method. Here's an example:

```
String str = "    Hello, World!   ";
String trimmedStr = str.trim();
print(trimmedStr); // Output: "Hello, World!"
```

In the above example, the original string "    Hello, World!   " contains leading and trailing whitespaces. The `trim()` method removes those whitespaces and returns the new string "Hello, World!".

You can also use `trimLeft()` and `trimRight()` methods to remove leading and trailing whitespaces respectively. Here's an example:

```
String str = "    Hello, World!   ";
String leftTrimmedStr = str.trimLeft();
String rightTrimmedStr = str.trimRight();
print(leftTrimmedStr); // Output: "Hello, World!   "
print(rightTrimmedStr); // Output: "    Hello, World!"
```

In the above example, the `trimLeft()` method removes leading whitespaces and returns the new string "Hello, World!   ". Similarly, `trimRight()` method removes trailing whitespaces and returns the new string "    Hello, World!".