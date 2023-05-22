In Dart, you can iterate over a map, which is equivalent to a hash in other languages. To iterate over a map, you can use a `for in` loop or a `forEach()` method. 

Here's an example of iterating over a map with a `for in` loop:

```
void main() {
  Map<String, int> myMap = {'apple': 1, 'banana': 2, 'orange': 3};
  
  for (var key in myMap.keys) {
    print('$key: ${myMap[key]}');
  }
}
```

Output:

```
apple: 1
banana: 2
orange: 3
```

In the above example, we defined a map `myMap` with key-value pairs. We used a `for in` loop to iterate over the keys of the map. For each key, we printed the key-value pair using string interpolation.

Alternatively, you can use the `forEach()` method to iterate over a map:

```
void main() {
  Map<String, int> myMap = {'apple': 1, 'banana': 2, 'orange': 3};
  
  myMap.forEach((key, value) {
    print('$key: $value');
  });
}
```

Output:

```
apple: 1
banana: 2
orange: 3
```

In this example, we used the `forEach()` method on the map and passed in a function that takes two arguments: `key` and `value`. The function body just prints out the key-value pair.