In TypeScript, we can concatenate two arrays using the `concat()` method. This method does not modify the original arrays, but returns a new array containing the elements of both arrays.

Here is an example of concatenating two number arrays:

```typescript
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let result: number[] = arr1.concat(arr2);

console.log(result); // Output: [1, 2, 3, 4, 5, 6]
```

We can also concatenate two string arrays using the same method:

```typescript
let arr1: string[] = ['Hello', 'world'];
let arr2: string[] = ['!', 'How', 'are', 'you?'];
let result: string[] = arr1.concat(arr2);

console.log(result); // Output: ["Hello", "world", "!", "How", "are", "you?"]
```

Alternatively, we can use the spread operator (`...`) to concatenate two arrays:

```typescript
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let result: number[] = [...arr1, ...arr2]; 

console.log(result); // Output: [1, 2, 3, 4, 5, 6]
```

Note that the spread operator is useful for concatenating more than two arrays at once.