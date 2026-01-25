In Dart, to convert a string to an integer, you can use the built-in `int.parse()` method. This method takes a `String` as an argument and returns an `int` value.

Here's an example of how to convert a string to an integer using the `int.parse()` method:

```dart
String strNumber = '42';
int integerValue = int.parse(strNumber);
print(integerValue); // Output: 42
```

In this example, we first create a `String` variable `strNumber` with the value `'42'`. We then call the `int.parse()` method and pass `strNumber` as an argument. The method returns an integer value, which we store in the `integerValue` variable. Finally, we print the value of `integerValue` to the console.

It's important to note that if the string being converted is not a valid integer value, the `int.parse()` method will throw a `FormatException`. So it's a good idea to wrap the conversion in a try-catch block to handle any errors that may occur. For example:

```dart
String strNumber = 'abc';
try {
  int integerValue = int.parse(strNumber);
  print(integerValue);
} catch (e) {
  print('Error converting string to integer: $e');
}
```

In this example, the value of `strNumber` is `'abc'`, which is not a valid integer. If we try to convert it using the `int.parse()` method without a try-catch block, we would get a `FormatException` error. However, in this example, we wrap the conversion in a try-catch block. If an error occurs, the code inside the catch block will be executed and the error message will be printed to the console.