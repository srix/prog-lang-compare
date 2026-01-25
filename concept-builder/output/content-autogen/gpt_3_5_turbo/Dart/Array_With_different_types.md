In Dart, an array can store objects of different types using the 'List' keyword. Here are some examples of creating an array with different types:

Example 1: Creating an array with integers and strings

```dart
List mixArray = [1, "two", 3, "four"];
print(mixArray); // Output: [1, two, 3, four]
```

Example 2: Creating an array with boolean, double and string

```dart
List mixArray = [true, 3.14, "Dart"];
print(mixArray); // Output: [true, 3.14, Dart]
```

Example 3: Creating an array with a custom class object and a string

```dart
class Person {
  String name;
  int age;
  
  Person({this.name, this.age});
}

List mixArray = [Person(name: "John", age: 25), "Dart"];
print(mixArray); // Output: [Instance of 'Person', Dart]
```

As you can see in the examples above, you can add objects of any type to an array in Dart using the List keyword.