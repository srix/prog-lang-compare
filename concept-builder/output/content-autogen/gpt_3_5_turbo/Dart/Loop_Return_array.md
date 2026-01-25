In Dart, we can return an array from a function using the `List` class. Here's an example:

```
List<int> getNumbers() {
  return [1, 2, 3, 4, 5];
}

void main() {
  List<int> numbers = getNumbers();
  print(numbers); // Output: [1, 2, 3, 4, 5]
}
```

In this example, the `getNumbers()` function returns a list of integers which is `[1, 2, 3, 4, 5]`. And we declare the returned value to be of type `List<int>`, which indicates that we are returning an integer array.

Note that we can also use the `var` keyword to define the type dynamically:

```
List<String> getNames() {
  return ["Alice", "Bob", "Charlie"];
}

void main() {
  var names = getNames();
  print(names); // Output: [Alice, Bob, Charlie]
}
```

In this example, we use the `var` keyword, and Dart is able to infer that the `getNames()` function is returning a `List<String>`. So we don't have to explicitly specify the type of `names`.