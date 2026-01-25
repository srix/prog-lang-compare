Sure, I'd be happy to explain.

In Dart, you can get the index of an element in an array using the `indexOf()` method. This method takes an argument, which is the element you want to find the index of, and returns the index of the first occurrence of that element in the array. If the element is not found in the array, the method returns -1.

Here's an example:

```dart
void main() {
  var arr = [10, 20, 30, 40, 50];
  
  // Finding the index of 30
  var index = arr.indexOf(30);
  print("The index of 30 is: $index");  // Output: The index of 30 is: 2
  
  // Finding the index of 60 (not found)
  index = arr.indexOf(60);
  print("The index of 60 is: $index");  // Output: The index of 60 is: -1
}
```

In this example, we have an array `arr` with 5 elements (10, 20, 30, 40, 50). We use the `indexOf()` method to find the index of the element 30, which is 2. We then try to find the index of the element 60, which is not present in the array, so the method returns -1.

I hope this helps! Let me know if you have any further questions.