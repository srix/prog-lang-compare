In Ruby, you can change all elements of an array using one of the following methods:

1. The map method: This method creates a new array with the results of running a given block once for every element in the original array.

```
# Example 1: Changing all elements to uppercase
original_array = ["apple", "banana", "orange"]
new_array = original_array.map { |element| element.upcase }
puts new_array
# Output: ["APPLE", "BANANA", "ORANGE"]

# Example 2: Changing all elements to their length
original_array = ["apple", "banana", "orange"]
new_array = original_array.map { |element| element.length }
puts new_array
# Output: [5, 6, 6]
```

2. The each method: This method iterates over every element in the array and lets you modify it directly.

```
# Example 1: Changing all elements to uppercase
fruits = ["apple", "banana", "orange"]
fruits.each { |fruit| fruit.upcase! }
puts fruits
# Output: ["APPLE", "BANANA", "ORANGE"]

# Example 2: Changing all elements to their length
fruits = ["apple", "banana", "orange"]
fruits.each { |fruit| fruit.replace(fruit.length.to_s) }
puts fruits
# Output: ["5", "6", "6"]
```

Note that the second example uses the replace method to replace the current element with a new value, instead of modifying it in place.