In Dart, the `length` property can be used to get the size of an array. Here's an example:

```dart
void main() {
  List<int> nums = [1, 2, 3, 4, 5];
  print(nums.length); // outputs 5
}
```

In the example above, we have an integer array `nums` with 5 elements. We get the size of the array using the `length` property and print it to the console.

You can also use the `isEmpty` property to check if an array is empty:

```dart
void main() {
  List<String> fruits = [];
  print(fruits.isEmpty); // outputs true
}
```

In this example, we have an empty string array `fruits`. We use the `isEmpty` property to check if the array is empty and print the result to the console. The output would be `true`, indicating that the array is indeed empty.