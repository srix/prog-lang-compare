In Dart, we can get the type of an object using the `runtimeType` property or the `is` operator.

Here's an example using `runtimeType`:

```
String word = "hello";
print(word.runtimeType); // Output: String
```

Here's an example using `is` operator:

```
int num = 10;
if (num is int) {
  print("num is an integer");
} else {
  print("num is not an integer");
}
```

Output: `num is an integer`

Both `runtimeType` and `is` operator can be used to check the type of an object dynamically during runtime. We can use them to perform certain operations based on the type of an object.