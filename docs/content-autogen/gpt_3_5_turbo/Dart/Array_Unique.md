To get the unique elements of an array in Dart, you can use the `toSet()` method which converts the array into a set, removing all duplicate elements. You can then convert the set back into a list to get the unique elements as a list.

Here's an example code snippet that demonstrates how to get the unique elements of an array:

```dart
void main() {
  List<int> numbers = [1, 2, 3, 2, 4, 1, 5, 3];
  
  Set<int> uniqueNumbers = numbers.toSet(); // Convert list to set to remove duplicates
  
  List<int> uniqueList = uniqueNumbers.toList(); // Convert set back to list to get unique elements
  
  print(uniqueList); // Output: [1, 2, 3, 4, 5]
}
```

In this example, we declared an array of integers `numbers` containing some duplicate elements. We first convert the array to a set using the `toSet()` method which removes all duplicates. We then convert the resulting set back to a list using the `toList()` method to get the unique elements as a list. Finally, we print the unique list using the `print()` function.