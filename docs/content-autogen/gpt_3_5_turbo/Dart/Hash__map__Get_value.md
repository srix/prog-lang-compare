In Dart, getting the value of a key in a hash (also known as a Map) can be done using square brackets notation `[]`. Here's an example:

```dart
Map<String, int> ages = {'John': 25, 'Sarah': 30, 'Tom': 35};

// Get the value of the key 'Sarah'
int sarahAge = ages['Sarah'];

print(sarahAge); // Output: 30
```

In the example above, we first create a Map called `ages` with three key-value pairs. Then we get the value of the key `'Sarah'` using square brackets notation and assign it to a variable called `sarahAge`. Finally, we print the value of `sarahAge`, which should output `30`.

It is important to note that if the key does not exist in the map, then Dart will return `null`. So, you can add check for null before using the value of a key. Here's an example:

```dart
Map<String, String> colors = {'red': 'R', 'green': 'G', 'blue': 'B'};

String yellowCode = colors['yellow'];

if (yellowCode == null) {
  print('Could not find code for the color yellow');
} else {
  print('Yellow code is: $yellowCode');
}
```

In this example, we try to get the value of the key `'yellow'` from the `colors` map. Since the key does not exist in the map, `yellowCode` is assigned `null`. We check if `yellowCode` is `null` and if so, we print a message saying that we could not find the code for the color yellow. Otherwise, we print the yellow code.