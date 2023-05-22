In Dart, there are multiple ways to check if a string is a number. 

Method 1: Using RegExp

Here's an example that uses a regular expression to check if a string is a number:

```
bool isNumber(String string) {
  final numberRegex = RegExp(r'^-?(([0-9]*)|(([0-9]*)\.([0-9]*)))$');
  return numberRegex.hasMatch(string);
}
```

In this regular expression, `^` and `$` represent the start and end of the string, `-?` matches a hyphen (minus sign) optionally, `([0-9]*)` matches any number of digits, and `(([0-9]*)\.([0-9]*))` matches numbers with decimal points. This method returns true if the string is a number and false otherwise.

Example usage:
```
print(isNumber('123')); // true
print(isNumber('-123')); // true
print(isNumber('123.45')); // true
print(isNumber('abc')); // false
```

Method 2: Using tryParse()

Here's an example that uses the `tryParse` function to check if a string is a number:

```
bool isNumber(String string) {
  return double.tryParse(string) != null;
}
```

This method returns true if the string is a number and false otherwise. `double.tryParse()` returns a `double` value if the string is a number, and returns null otherwise.

Example usage:
```
print(isNumber('123')); // true
print(isNumber('-123')); // true
print(isNumber('123.45')); // true
print(isNumber('abc')); // false
```

Both methods are valid and it depends on the situation on which one to use.