Sure, here's an explanation and two examples:

In Ruby, there are several ways to delete an element from an array. Here are two common approaches:

1. Using the `delete` method
The `Array#delete` method can be used to remove a specific element from an array. Here's an example:

```
fruits = ["apple", "banana", "pear", "orange"]
fruits.delete("pear")
puts fruits.inspect   # Output: ["apple", "banana", "orange"]
```

In the example above, the `delete` method removes the string "pear" from the `fruits` array.

2. Using the `delete_at` method
The `Array#delete_at` method can be used to remove an element from an array at a specific index. Here's an example:

```
numbers = [1, 2, 3, 4, 5]
numbers.delete_at(3)
puts numbers.inspect   # Output: [1, 2, 3, 5]
```

In the example above, the `delete_at` method removes the element at index 3 (which has the value 4) from the `numbers` array.

In both cases, the original array is modified by the deletion method.