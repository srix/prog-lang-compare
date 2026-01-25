In Dart, you can compare two strings using the `==` operator. This operator returns `true` if both strings have the same sequence of characters, otherwise it returns `false`. Here are some examples:

```dart
void main() {
  String str1 = "Hello";
  String str2 = "hello";
  String str3 = "Hello";
  
  // Case sensitive comparison using ==
  print(str1 == str2); // false
  print(str1 == str3); // true
  
  // Case insensitive comparison
  print(str1.toLowerCase() == str2.toLowerCase()); // true
  
  // Compare using compareTo method
  print(str1.compareTo(str2)); // positive value
  print(str1.compareTo(str3)); // 0
  print(str2.compareTo(str3)); // negative value
}

```
In the first example, we compare `str1` with `str2`. Since they have different cases, the result is `false`. In the second example, we compare `str1` with `str3`, which has the same sequence of characters but a different reference, the result is `true`. 

To perform a case insensitive comparison, we can convert both strings to lowercase using the `toLowerCase()` method and then use the `==` operator to compare them.

Finally, we can use the `compareTo()` method to compare two strings. This method compares the lexicographic (dictionary) order of two strings and returns a negative integer if the first string comes before the second string, a positive integer if it comes after, and 0 if they are equal.