In Dart, you can change all elements of an array using a looping construct such as `for` loop or `forEach()` method. Here are some examples to demonstrate the process:

1. Using a `for` loop:

```dart
void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  for (int i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
  print(numbers); // Output: [2, 4, 6, 8, 10]
}
```

In this example, we have initialized an array `numbers` with five integer values. We then iterate over each element of the array using a `for` loop. Inside the loop, we multiply current element by 2 and assign it to the same position in the array. Finally, we print the modified array `numbers`.

2. Using `forEach()` method:

```dart
void main() {
  List<int> numbers = [1, 2, 3];
  numbers.forEach( (element) => element *= 10 );
  print(numbers); // Output: [10, 20, 30]
}
```

Here, we have initialized an array `numbers` with three integer values. We then call the `forEach()` method on the array and pass a lambda function as argument. The lambda function takes each element of the array, multiplies it by 10, and assigns the new value to the same position in the array. Finally, we print the modified array `numbers`.

Both approaches produce the same output. You can use any of these methods as per your preference and use case.