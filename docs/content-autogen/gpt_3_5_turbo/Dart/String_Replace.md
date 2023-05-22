To replace a substring within a string in Dart, you can use the `replaceAll()` method which takes two arguments: the substring to replace and the replacement string. Below are some examples:

Example 1:
```
String originalString = "Hello, world!";
String newString = originalString.replaceAll("world", "Dart");
print(newString); // Hello, Dart!
```

In the above example, we use the `replaceAll()` method to replace the substring "world" with "Dart" in the original string.

Example 2:
```
String originalString = "The quick brown fox jumps over the lazy dog.";
String newString = originalString.replaceAll("the", "A");
print(newString); // A quick brown fox jumps over A lazy dog.
```

In this example, we replace all occurrences of the substring "the" with the string "A" in the original string.

Example 3:
```
String originalString = "1243678";
String newString = originalString.replaceAll('6', '9');
print(newString); // 1243978
```

In this example, we use the `replaceAll()` method to replace the substring "6" with "9" in the original string.

Thus, using the `replaceAll()` method, you can easily replace substrings within strings in Dart.