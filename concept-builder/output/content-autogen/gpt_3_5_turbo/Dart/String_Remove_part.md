In Dart, you can remove a part of a string using the `substring` method. 

The `substring` method takes two parameters: the starting index and the ending index (optional). It returns a new string that contains the characters from the original string starting at the specified index and running up to (but not including) the ending index.

Here are some examples:

```
String originalString = "Hello, World!";

// Removing the first 7 characters of the string
String newString = originalString.substring(7);
print(newString); // Output: "World!"

// Removing a range of characters from the string
newString = originalString.substring(0, 5) + originalString.substring(7);
print(newString); // Output: "Hello World!"

// Removing the last character of the string
newString = originalString.substring(0, originalString.length - 1);
print(newString); // Output: "Hello, World"
```

In the first example, we removed the first 7 characters of the string using `substring(7)`.

In the second example, we removed a range of characters from the original string. We used `substring(0, 5)` to get the first 5 characters of the string and `substring(7)` to get all the characters after the 7th index. We then concatenated these two new strings using `+`.

In the third example, we removed the last character of the string. We used `substring(0, originalString.length - 1)` to get the characters from the start of the string up to (but not including) the last character.