In Groovy, we can check if an array includes an element by using the `contains()` method. This method takes a single argument, which is the value that we want to check whether it is present in the array or not. If the value is present, it returns true, otherwise it returns false.

Here is an example code snippet:

```groovy
def arr = ['apple', 'banana', 'orange', 'mango']

// Check if 'apple' exists in arr
assert arr.contains('apple')

// Check if 'kiwi' exists in arr
assert !arr.contains('kiwi')
```

In the code above, we created an array `arr` that consists of four fruits: apple, banana, orange and mango. Then, we checked if `arr` contains the values ‘apple’ and ‘kiwi’ using the `contains()` method.

The first assertion returns true because the `contains()` method found an element ‘apple’ in the `arr`. The second assertion returns false because the `contains()` method could not find an element ‘kiwi’ in the `arr`.

We can also check if an array includes an element by using the `in` operator. Here’s an example:

```groovy
def arr = ['apple', 'banana', 'orange', 'mango']

// Check if 'apple' exists in arr
assert 'apple' in arr

// Check if 'kiwi' exists in arr
assert 'kiwi' not in arr
```

In the code above, we checked if the values ‘apple’ and ‘kiwi’ exist in the `arr` array using the `in` operator. The first assertion returns true because the `in` operator found an element ‘apple’ in the `arr`. The second assertion returns false because the `in` operator could not find an element ‘kiwi’ in the `arr`.