In Julia, block passing refers to a technique where a block of code is passed as a function argument. The curly brackets `{}` are used to define the block of code, and it can be passed to a function as an anonymous function.

Here's an example:

Suppose you want to apply a specific function to a range of numbers. You can use the `map` function along with block passing to do this in one line of code. 

```
x = [1,2,3,4,5]

map({i -> i^2}, x)
```

In this example, the block of code enclosed in `{}` is `i -> i^2`, which is an anonymous function that squares each element in the input array `x`. The `map` function applies this function to each element of the array.

Another example:

Suppose you have a list of words, and you want to select only the words that start with a specific letter. Again, you can use block passing to do this in one line of code:

```
words = ["apple", "banana", "orange", "peach", "grape"]

filter({w -> w[1] == 'a'}, words)
```

In this example, the block of code enclosed in `{}` is `w -> w[1] == 'a'`, which is an anonymous function that checks if the first character of the input string is `'a'`. The `filter` function applies this function to each element of the array `words` to select only those that satisfy the condition.

In summary, block passing is a convenient technique that can be used to pass a block of code as a function argument in Julia, allowing you to write concise and expressive code.