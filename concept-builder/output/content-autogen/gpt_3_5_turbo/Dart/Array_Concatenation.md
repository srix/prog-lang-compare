In Dart, to concatenate two arrays, you can use the `+` operator. Here are examples:

Example 1: Concatenating two numerical arrays
```dart
void main() {
  List<int> first = [1, 2, 3];
  List<int> second = [4, 5, 6];
  List<int> combined = first + second;
  print(combined); // Output: [1, 2, 3, 4, 5, 6]
}
```

Example 2: Concatenating two string arrays
```dart
void main() {
  List<String> first = ['hello', 'world'];
  List<String> second = ['!', '!'];
  List<String> combined = [...first, ...second];
  print(combined); // Output: ['hello', 'world', '!', '!']
}
```

In the first example, we define two numerical arrays (`first` and `second`), concatenate them using the `+` operator, and save the result to a new variable `combined`. The output will be `[1, 2, 3, 4, 5, 6]`.

In the second example, we define two string arrays (`first` and `second`), use the `spread operator (...)` to concatenate them, and save the result to a new variable `combined`. The output will be `['hello', 'world', '!', '!']`.