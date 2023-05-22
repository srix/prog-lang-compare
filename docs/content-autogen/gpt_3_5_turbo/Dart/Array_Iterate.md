Sure. Iterating over an array means visiting every element of the array, one by one. In Dart, an array is known as a List. 

We can use a for loop or a for-in loop to iterate over a List.

Here's an example of a for loop to iterate over a List in Dart:

```dart
void main() {
  var fruits = ['apple', 'banana', 'orange'];
  
  for (var i = 0; i < fruits.length; i++) {
    print(fruits[i]);
  }
}
```

In this example, we first declare an array of fruits, which is a List object in Dart. We then use a for loop to iterate over the array. The for loop starts with the index 0 and continues until the index is less than the length of the array. Inside the loop, we print the value of the fruit at the current index.

The output of this program will be:

```
apple
banana
orange
```

We can also use a for-in loop to iterate over a List:

```dart
void main() {
  var fruits = ['apple', 'banana', 'orange'];
  
  for (var fruit in fruits) {
    print(fruit);
  }
}
```

In this example, we use a for-in loop to iterate over the array. The for loop assigns the value of each element in the List to the variable `fruit`. Inside the loop, we print the value of the fruit variable.

The output of this program will be the same as the previous program:

```
apple
banana
orange
```

Both of these examples demonstrate how to iterate over a List in Dart, using both a for loop and a for-in loop.