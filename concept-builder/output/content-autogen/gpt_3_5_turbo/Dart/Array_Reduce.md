In Dart, we can use the `reduce()` method to iterate over the elements of an iterable (such as an array or list) and reduce them to a single value. The `reduce()` method takes a function as an argument that combines two elements of the iterable into a single value. This function is called repeatedly until all elements have been combined into a single value. 

Here is an example of using `reduce()` to compute the sum of all the elements of an array:

```
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((a, b) => a + b);
print(sum);  // Output: 15
```

In this example, `reduce()` is called on the `numbers` array. The function we pass to `reduce()` takes two arguments, `a` and `b`, which represent the accumulated value and the current value, respectively. The function adds `a` and `b` together and returns the result. This process is repeated until all elements of the array have been added together, resulting in the final sum of 15.

Here is another example that uses `reduce()` to compute the product of all the elements of an array:

```
var numbers = [1, 2, 3, 4, 5];
var product = numbers.reduce((a, b) => a * b);
print(product);  // Output: 120
```

In this example, the same logic is applied, but instead of summing the elements, we multiply them together. The final product is 120. 

Note that `reduce()` can be used with any binary operation and iterables other than an array.