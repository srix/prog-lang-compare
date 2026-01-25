In Groovy, we can get the unique elements of an array by using the `unique()` method. Here's an example:

```groovy
def numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
def uniqueNumbers = numbers.unique()

assert uniqueNumbers == [1, 2, 3, 4]
```

In this example, we start with an array `numbers` that contains duplicates. We call the `unique()` method on this array to get a new array `uniqueNumbers` that contains only the unique elements. We then use the `assert` statement to confirm that the expected result is returned.

Another way to use `unique()` is to chain it with other array methods. For example, we can sort an array and then get the unique elements like this:

```groovy
def fruits = ["apple", "orange", "banana", "apple", "pear", "orange", "kiwi"]
def uniqueFruits = fruits.sort().unique()

assert uniqueFruits == ["apple", "banana", "kiwi", "orange", "pear"]
```

In this example, we start with an array `fruits` that contains duplicates. We chain the `sort()` method with `unique()` to first sort the array alphabetically and then get the unique elements. We then use the `assert` statement to confirm that the expected result is returned.