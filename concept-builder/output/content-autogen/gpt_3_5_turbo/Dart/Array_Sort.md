Sure! In Dart, you can sort an array using the `sort()` method that is available for the `List` class. This method sorts the array in ascending order by default. Here is an example:

```dart
void main() {
  List<int> numbers = [4, 1, 5, 2, 3];
  numbers.sort();
  print(numbers); // Output: [1, 2, 3, 4, 5]
}
```

As you can see, we've created an array of integers called `numbers`. We then called the `sort()` method on the `numbers` array, which sorted the array in ascending order. Finally, we printed the sorted array using `print()`.

If you want to sort the array in descending order, you can use the `sort()` method in conjunction with the `compareTo()` method. Here is an example:

```dart
void main() {
  List<int> numbers = [4, 1, 5, 2, 3];
  numbers.sort((a, b) => b.compareTo(a));
  print(numbers); // Output: [5, 4, 3, 2, 1]
}
```

In this example, we've passed a function as a parameter to the `sort()` method. This function compares two values `a` and `b`, and returns -1, 0, or 1 depending on whether `a` is less than, equal to, or greater than `b`, respectively. By reversing the order of the values being compared (with `b.compareTo(a)`) we can sort the array in descending order.