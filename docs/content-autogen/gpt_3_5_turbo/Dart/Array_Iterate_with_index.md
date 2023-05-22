To iterate over an array with index in Dart, you can use a traditional for loop or a for-each loop with the `Iterable` class. Here are some examples:

1. Using traditional for loop:
```
void main() {
  var arr = [1, 2, 3, 4, 5];
  
  for (int i = 0; i < arr.length; i++) {
    print("Index: $i, Value: ${arr[i]}");
  }
}
```
Output:
```
Index: 0, Value: 1
Index: 1, Value: 2
Index: 2, Value: 3
Index: 3, Value: 4
Index: 4, Value: 5
```
In this example, we declare an array `arr` and iterate over it using a traditional for loop. We print both the index and the value of each element in the array.

2. Using for-each loop with Iterable class:
```
void main() {
  var arr = [1, 2, 3, 4, 5];
  
  arr.asMap().forEach((index, value) => print("Index: $index, Value: $value"));
}
```
Output:
```
Index: 0, Value: 1
Index: 1, Value: 2
Index: 2, Value: 3
Index: 3, Value: 4
Index: 4, Value: 5
```
In this example, we again declare an array `arr` but this time we use a for-each loop with the `Iterable` class. We use the `asMap()` method to iterate over the array and return both the index and the value of each element. The `forEach()` method is then called on the Iterable object to print out the index and value of each element in the array.