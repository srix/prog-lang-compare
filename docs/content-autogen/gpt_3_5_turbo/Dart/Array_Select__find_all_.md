In Dart, you can find all elements of an array satisfying a condition by using the `where` method, which allows you to filter the array based on a given condition. 

Here's an example:

```dart
void main() {
  // create an array of integers
  List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // find all even numbers using where method
  List<int> evenNumbers = numbers.where((number) => number % 2 == 0).toList();

  // print the even numbers
  print(evenNumbers); // [2, 4, 6, 8, 10]
}
```

In this example, we have an array of integers `numbers`. We use the `where` method to filter out only the even numbers. The `where` method takes a function that is called for each element in the array. If the function returns true, the element is included in the resulting array. In our example, the function `(number) => number % 2 == 0` returns true if the number is even. We call `toList()` method on the resulting iterable to convert it back to a List. Finally, we print out the resulting array of even numbers. 

You can apply this approach to any type of array and any condition that you need to check.