In Dart, you can create a hash or a map using the `{}` or the `Map()` constructor. A hash or a map is a collection of key-value pairs. 

Here's an example of how to create a hash using `{}`:

```dart
// Creating a hash using {}
var myMap = {'name': 'John', 'age': 25, 'email': 'john@example.com'};

// Accessing a value using the key
print(myMap['name']); // Output: John

// Adding a new key-value pair
myMap['phone'] = '123-456-7890';

// Printing the hash
print(myMap); // Output: {name: John, age: 25, email: john@example.com, phone: 123-456-7890}
```

You can also create a hash using the `Map()` constructor. Here's an example:

```dart
// Creating a hash using Map()
var myMap = Map();
myMap['name'] = 'John';
myMap['age'] = 25;
myMap['email'] = 'john@example.com';

// Accessing a value using the key
print(myMap['name']); // Output: John

// Adding a new key-value pair
myMap['phone'] = '123-456-7890';

// Printing the hash
print(myMap); // Output: {name: John, age: 25, email: john@example.com, phone: 123-456-7890}
```

In both examples, we created a hash with key-value pairs and stored it in the `myMap` variable. We accessed the value of a key using the square brackets `[]`. We added a new key-value pair using the square brackets `[]` and the assignment operator `=`. Finally, we printed the hash using `print()`.