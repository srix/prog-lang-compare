To find all elements of an array satisfying a condition in TypeScript, we can use the `filter()` method. This method takes a callback function as an argument and returns a new array with all the elements for which the callback function returns true.

Here's an example:

```typescript
const numbers = [1, 2, 3, 4, 5];

// find all even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

In this example, we first define an array called `numbers` containing the values 1 to 5. We then use the `filter()` method to create a new array containing only the even numbers from the original array. The callback function `(num) => num % 2 === 0` checks whether each element is divisible by 2 with no remainder, which means it's even.

We can also use more complex conditions in the callback function. For example, let's say we want to find all the words in a string that are longer than 4 letters. We can split the string into an array of words using the `split()` method and then use the `filter()` method:

```typescript
const sentence = "The quick brown fox jumps over the lazy dog";

// find all words longer than 4 letters
const longWords = sentence.split(" ").filter((word) => word.length > 4);

console.log(longWords); // Output: ["quick", "brown", "jumps"]
```

In this example, we first define a string called `sentence`. We then split it into an array of words using the `split()` method, which splits the string at each space character. We then use the `filter()` method to create a new array containing only the words that are longer than 4 letters. The callback function `(word) => word.length > 4` checks whether the length of each word is greater than 4.