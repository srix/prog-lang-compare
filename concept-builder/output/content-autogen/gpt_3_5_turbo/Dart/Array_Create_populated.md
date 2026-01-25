In Dart, you can create an array by using square brackets `[]` to enclose a comma-separated list of elements. Here is an example:

```dart
List<int> numbers = [1, 2, 3, 4, 5];
```

In the example above, we created an array called `numbers` with five integers. We also specified the type of the array using the `List<int>` syntax.

You can also create an empty array and add elements later, like this:

```dart
List<String> names = [];
names.add("Alice");
names.add("Bob");
```

In this example, we created an empty array called `names` with a string type. We then added two elements to the array using the `add()` method.

You can access individual elements in an array using their index, like this:

```dart
print(numbers[0]); // prints 1
```

This will print the first element in the `numbers` array.

You can also loop through all elements in an array using the `for` loop, like this:

```dart
for (int i = 0; i < numbers.length; i++) {
  print(numbers[i]);
}
```

This will print all elements in the `numbers` array, one by one.