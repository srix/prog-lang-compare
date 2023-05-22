In TypeScript, it is possible to iterate over an array using various loops such as for loop, for...of loop, forEach() loop, and for...in loop. Here are some examples of each:

1. Using for loop:

```typescript
const myArray = ['apple', 'banana', 'orange'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

Output:

```
apple
banana
orange
```

2. Using for...of loop:

```typescript
const myArray = ['apple', 'banana', 'orange'];

for (const element of myArray) {
  console.log(element);
}
```

Output:

```
apple
banana
orange
```

3. Using forEach() loop:

```typescript
const myArray = ['apple', 'banana', 'orange'];

myArray.forEach(function(element) {
  console.log(element);
});
```

Output:

```
apple
banana
orange
```

4. Using for...in loop:

```typescript
const myArray = ['apple', 'banana', 'orange'];

for (const index in myArray) {
  console.log(myArray[index]);
}
```

Output:

```
apple
banana
orange
```

Note: The for...in loop is generally used to iterate over object properties rather than arrays. It is not recommended to use for...in loop for arrays as it may produce unexpected results in certain cases. It is recommended to use other loops such as for or for...of loop for iterating over arrays.