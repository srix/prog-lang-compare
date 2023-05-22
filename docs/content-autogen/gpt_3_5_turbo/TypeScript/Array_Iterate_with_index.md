In TypeScript, you can iterate over an array with index using a `for` loop or a `forEach` loop. Here are examples of how to do this:

1. Using a `for` loop:

```typescript
let myArray = ['apple', 'banana', 'orange'];

for(let i=0; i<myArray.length; i++){
    console.log(`Index: ${i} - Value: ${myArray[i]}`);
}
```

Output:

```
Index: 0 - Value: apple
Index: 1 - Value: banana
Index: 2 - Value: orange
```

2. Using a `forEach` loop:

```typescript
let myArray = ['apple', 'banana', 'orange'];

myArray.forEach((value, index) => {
    console.log(`Index: ${index} - Value: ${value}`);
});
```

Output:

```
Index: 0 - Value: apple
Index: 1 - Value: banana
Index: 2 - Value: orange
```

Both methods will give you the same output, but using a `forEach` loop can be more concise and easier to read.