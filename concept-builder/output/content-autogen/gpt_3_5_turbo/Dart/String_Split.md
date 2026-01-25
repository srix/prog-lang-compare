In Dart, you can split a string into multiple substrings based on a specified separator or pattern. 

Here's an example of how to split a string using a separator:

```dart
String str = "hello,world";

List<String> parts = str.split(",");
print(parts); // output: ["hello", "world"]
```

In the example above, the `split()` method is used to split the string `str` into two separate strings using the separator `,`.

If you want to split a string based on a regular expression pattern, you can use the `split()` method with the regular expression pattern inside:

```dart
String str = "hello@world.com";

List<String> parts = str.split(RegExp(r"[@.]"));
print(parts); // output: ["hello", "world", "com"]
```

In this example, the `split()` method is used with a regular expression pattern that matches both `@` and `.` characters. As a result, the string is split into three substrings: `"hello"`, `"world"`, and `"com"`.