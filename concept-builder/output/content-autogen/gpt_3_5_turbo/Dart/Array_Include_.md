In Dart, you can check whether an array contains a particular element by using the `contains()` method. The `contains()` method returns a boolean value indicating whether the given element exists in the array or not.

Here is an example that uses the `contains()` method to search for an element in a simple array of integers:

```dart
void main() {
  List<int> numbers = [1, 2, 3, 4, 5];
  
  print(numbers.contains(3)); // true
  print(numbers.contains(6)); // false
}
```

In this example, we declare an array `numbers` that contains the integers from 1 to 5. We then use the `contains()` method to check whether the array contains the integer 3 and 6, respectively. The `contains()` method returns `true` for the integer 3, and `false` for the integer 6.

You can also use the `contains()` method on arrays that contain other data types, like strings or objects. Here's an example that shows how to search for a string in an array of strings:

```dart
void main() {
  List<String> animals = ['cat', 'dog', 'rat', 'bird'];
  
  print(animals.contains('dog')); // true
  print(animals.contains('snake')); // false
}
```

In this example, we declare an array `animals` that contains four strings representing the names of animals. We then use the `contains()` method to check whether the array contains the string "dog" and "snake", respectively. The `contains()` method returns `true` for the string "dog", and `false` for the string "snake". 

So, that's how you check if an array includes an element in Dart.