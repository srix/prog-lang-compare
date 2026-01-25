To find all elements of an array satisfying a given condition in Haskell, we can use the filter function.

The filter function takes two arguments: a predicate function that returns a Boolean value, and a list. It returns a new list that contains only the elements from the original list for which the predicate function returns True.

Here is an example of using filter to find all even numbers in an array of integers:

```
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evenArray = filter (\x -> x `mod` 2 == 0) array
-- evenArray = [2,4,6,8,10]
```

In this example, we define an array of integers, `array`, and then use the `filter` function to find all the even numbers in the array. The predicate function passed to `filter` is `\x -> x `mod` 2 == 0`, which tests whether a number is even by checking if its remainder when divided by 2 is zero.

Another example is to find all the names in a list that start with the letter "A":

```
names = ["Alice", "Bob", "Amy", "Andrew", "Jane", "Amanda"]
aNames = filter (\name -> head name == 'A') names
-- aNames = ["Alice", "Amy", "Andrew", "Amanda"]
```

In this example, we define a list of names, `names`, and use the `filter` function to find all the names that start with the letter "A". The predicate function passed to `filter` is `\name -> head name == 'A'`, which tests whether a name starts with the letter "A" by checking whether the first character of the name is 'A'.
