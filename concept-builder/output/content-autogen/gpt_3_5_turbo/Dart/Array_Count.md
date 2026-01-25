To count the number of elements in an array matching a condition in Dart, you can use the `where()` method to filter the list and then use the `length` property to get the number of matching elements.

Here's an example:

```dart
void main() {
  List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  int countEven = numbers.where((number) => number % 2 == 0).length;
  print('Total even numbers: $countEven'); // Output: Total even numbers: 5
  
  int countOdd = numbers.where((number) => number % 2 != 0).length;
  print('Total odd numbers: $countOdd'); // Output: Total odd numbers: 5
}
```

In the above example, we have a list of 10 numbers. We use the `where()` method to filter the list based on whether the number is even or odd. Then we use the `length` property to get the number of elements that match the condition. Finally, we print the counts to the console.

You can modify the condition inside the `where()` method to count elements that satisfy any other condition.