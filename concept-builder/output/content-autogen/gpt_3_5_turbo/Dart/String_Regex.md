Regular Expressions (regex) are a powerful tool used to match patterns in strings. In Dart, the `RegExp` class is used to define a regular expression pattern. Here is an example of defining a regular expression pattern:

```dart
RegExp pattern = RegExp(r'ab+c');
```

This pattern will match any string that starts with an 'a', followed by one or more 'b's, and ends with a 'c'.

To use this pattern to match a string, we can call the `hasMatch()` method of the `RegExp` class, passing in the string we want to match:

```dart
bool matches = pattern.hasMatch('abbccc');

print(matches); // true
```

In addition to the `hasMatch()` method, there are several other methods we can use to work with regular expressions:

- `allMatches()` - returns an iterable of all matches in a string
- `firstMatch()` - returns the first match in a string
- `stringMatch()` - returns the matched string of the first match in a string

Here is an example of using `allMatches()` to find all occurrences of a pattern in a string:

```dart
RegExp pattern = RegExp(r'\d+');
String text = 'There are 100 apples and 200 pears.';

Iterable<Match> matches = pattern.allMatches(text);

for (Match match in matches) {
  print('${match.start} - ${match.end}: ${match.group(0)}');
}
```

This will output:

```
10 - 13: 100
28 - 31: 200
```

In this example, we're using the `\d+` regular expression pattern to match one or more digits, and then calling the `allMatches()` method to find all occurrences of this pattern in the text. We then loop over each match and print out the start and end position of the match, as well as the matched string itself (which we get using the `group(0)` method of the `Match` object).

Regular expressions can be complex, but they are also very powerful. They can be used to match a wide variety of patterns in strings, and Dart's `RegExp` class provides a simple way of incorporating regular expressions into your Dart code.