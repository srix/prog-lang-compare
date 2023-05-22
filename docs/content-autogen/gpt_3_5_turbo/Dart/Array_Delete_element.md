To delete an element from an array in Dart, we can make use of the `remove` or `removeAt` method of the `List` class.

Here's an example code:

```dart
void main() {
  List<String> animals = ['Cat', 'Dog', 'Elephant', 'Giraffe', 'Lion'];
  
  print('Before deleting: $animals');
  
  // Deleting by value using "remove" method
  animals.remove('Elephant');
  
  // Deleting by index using "removeAt" method
  animals.removeAt(3);
  
  print('After deleting: $animals');
}
```

Output:
```
Before deleting: [Cat, Dog, Elephant, Giraffe, Lion]
After deleting: [Cat, Dog, Giraffe]
```

In the above example, we have first printed the original list using `print('Before deleting: $animals');`. 

Then, we have deleted an element from the list by value using the `remove` method shown below.

```dart
animals.remove('Elephant');
```

Next, we have deleted an element from the list by index using the `removeAt` method shown below.

```dart
animals.removeAt(3);
```

Finally, we have printed the list after deleting the elements using `print('After deleting: $animals');`.