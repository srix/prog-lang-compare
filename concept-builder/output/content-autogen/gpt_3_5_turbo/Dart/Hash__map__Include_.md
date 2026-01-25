In Dart, you can check if a hash includes a specific key by using the `containsKey()` method. This method returns true if the hash contains the specified key, and false otherwise.

Here's an example:

```dart
void main() {
  Map<String, int> myMap = {'apple': 1, 'banana': 2, 'orange': 3};

  // Check if map includes key
  print(myMap.containsKey('apple'));  // Output: true
  print(myMap.containsKey('grape'));  // Output: false
}
```

In this example, we have a hash or a map named `myMap` containing key-value pairs. We use the `containsKey()` method to check if the hash includes the key 'apple'. The output is true, which means the hash includes the key 'apple'. We also checked if the hash includes the key 'grape'. The output is false, which means the hash does not include the key 'grape'.