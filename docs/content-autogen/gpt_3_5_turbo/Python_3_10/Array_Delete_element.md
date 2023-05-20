In Python, you can delete an element from an array using the `del` keyword or by using the `pop()` method. Here are examples of each method:

Method 1: Using the `del` keyword
```
# Example array
fruits = ["apple", "banana", "cherry", "orange"]

# Removing the 2nd element ("banana")
del fruits[1]

# Print the resulting array
print(fruits) # Output: ["apple", "cherry", "orange"]
```

Method 2: Using the `pop()` method
```
# Example array
fruits = ["apple", "banana", "cherry", "orange"]

# Removing the last element ("orange") and saving it to a variable
removed_fruit = fruits.pop()

# Print the removed element and resulting array
print(removed_fruit) # Output: "orange"
print(fruits) # Output: ["apple", "banana", "cherry"]
``` 

Note: the `pop()` method removes and returns the last element of the array unless you pass an index as an argument.