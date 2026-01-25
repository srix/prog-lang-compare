In Dart, a constant list is a list whose length and elements cannot change once it is initialized. Here's how to use a constant list in Dart with examples:

1. Using const keyword: You can use the const keyword to create a constant list. Once the list is created, you cannot modify its length or elements.

```dart
// Creation of constant list using const
const fruits = ['apple', 'banana', 'orange'];
```

2. Using the constructor of the List class: You can also use the constructor of the List class to create a constant list.

```dart
// Creation of constant list using List constructor
var veggies = const List<String>.unmodifiable(['carrots', 'spinach', 'broccoli']);
```

Here are some ways to work with constant lists:

1. Access elements of the list:

```dart
// Accessing the elements of the constant list
print(fruits[0]); // output: apple
print(veggies[1]); // output: spinach
```

2. Iterate through the list:

```dart
// Iterating through the constant list
for (var fruit in fruits) {
  print(fruit);
}
// Output: apple
//         banana
//         orange

for (var veggie in veggies) {
  print(veggie);
}
// Output: carrots
//         spinach
//         broccoli
```

3. Concatenate two constant lists:

```dart
// Concatenating two constant lists
var groceries = const [...fruits, ...veggies];
print(groceries);
// Output: [apple, banana, orange, carrots, spinach, broccoli]
```