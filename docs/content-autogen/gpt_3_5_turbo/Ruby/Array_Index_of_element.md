In Ruby, you can get the index of an element in an array using the `index` method. Here's an example:

```
fruits = ["apple", "banana", "orange", "pear"]
index = fruits.index("orange")
puts index #=> 2
```

In this example, we have an array of fruits and we want to get the index of "orange". So we use the `index` method to find the index of "orange" in the `fruits` array, which is `2`.

If the element you are searching for is not in the array, the `index` method will return `nil`. Here's an example:

```
fruits = ["apple", "banana", "orange", "pear"]
index = fruits.index("grape")
puts index #=> nil
```

In this example, the element "grape" is not in the `fruits` array, so the `index` method returns `nil`.