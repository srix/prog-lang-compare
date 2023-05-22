To reduce an array to a single value in TypeScript, you can use the `reduce` method. This method takes a callback function as its first argument. The callback function takes two arguments: an accumulator (which is the value of the previous iteration) and the current element. It returns a value that will become the accumulator for the next iteration. 

Here is an example:

```typescript
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, curr) => acc + curr);

console.log(sum); // output: 15
```

In this example, we use the `reduce` method to calculate the sum of all the elements in `nums`. The `reduce` method takes a callback function that adds the accumulator (`acc`) to the current element (`curr`). It returns the sum of all elements in the array.

Another example:

```typescript
const words = ['hello', 'world', 'how', 'are', 'you'];

const sentence = words.reduce((acc, curr) => `${acc} ${curr}`);

console.log(sentence); // output: "hello world how are you"
```

In this example, we use the `reduce` method to concatenate all the strings in `words` into a single sentence. The `reduce` method takes a callback function that adds the accumulator to a space and the current element. It returns a sentence composed of all the words in the array.