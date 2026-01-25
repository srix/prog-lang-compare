To get the first and last element of an array in Dart, you can use the `first` and `last` properties of the `List` class.

Here's an example:

```dart
void main() {
  List<int> numbers = [1, 2, 3, 4, 5];

  int firstNumber = numbers.first;
  int lastNumber = numbers.last;

  print("First number: $firstNumber"); // Output: First number: 1
  print("Last number: $lastNumber"); // Output: Last number: 5
}
```

In this example, we have a list of integers named `numbers`. We use the `first` and `last` properties to get the first and last elements of the list, respectively. We store these values in separate variables and then print them using the `print()` function. The output shows the first and last numbers in the list.