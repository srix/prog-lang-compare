Sure, here's an explanation with examples:

In Swift, you can add an element to an array using the `append()` method or the `+=` operator.

Here's an example of using the `append()` method to add a string to an array of strings:

```
var fruits = ["apple", "banana", "orange"]
fruits.append("pear")

print(fruits) // ["apple", "banana", "orange", "pear"]
```

In the above example, we declared an array of strings called `fruits` with three elements. We then used the `append()` method to add a new string, "pear", to the end of the array. The `print()` statement then outputs the updated array with the new element added.

Here's an example of using the `+=` operator to add multiple integers to an array of integers:

```
var numbers = [1, 2, 3]
numbers += [4, 5, 6]

print(numbers) // [1, 2, 3, 4, 5, 6]
```

In the above example, we declared an array of integers called `numbers` with three elements. We then used the `+=` operator to add another array of integers, `[4, 5, 6]`, to the end of the `numbers` array. The `print()` statement then outputs the updated array with the three new elements added.

I hope that helps! Let me know if you have any further questions.