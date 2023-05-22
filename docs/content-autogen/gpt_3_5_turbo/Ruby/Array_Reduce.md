In Ruby, to reduce an array to a single value, you can use the `reduce` method. The `reduce` method takes an initial value and a block as arguments. The block takes two arguments, an accumulator and the current element in the array, and returns a new accumulator based on those values. Here are a few examples:

```
# Summing the elements in an array
array = [1, 2, 3, 4, 5]
sum = array.reduce(0) { |acc, element| acc + element }
# sum = 15

# Finding the maximum value in an array
array = [1, 7, 3, 9, 2]
max = array.reduce(-Float::INFINITY) { |acc, element| acc > element ? acc : element }
# max = 9

# Concatenating an array of strings into a single string
array = ["hello", "world", "how", "are", "you"]
string = array.reduce("") { |acc, element| acc + element }
# string = "helloworldhowareyou"
```

In the first example, the array is reduced to a single value which represents the sum of all elements. In the second example, the array is reduced to a single value which represents the maximum element in the array. And in the third example, the array is reduced to a single string containing all of the individual strings concatenated.