To get the unique elements of an array in TypeScript, we can use the `Set` object. An example of how to do this is shown below:

```typescript
const arr = ['apple', 'banana', 'cherry', 'cherry', 'orange', 'apple'];

const uniqueArr = [...new Set(arr)]; // ['apple', 'banana', 'cherry', 'orange']
```

In the code above, we first declare an array `arr` with some duplicate values. We then create a new `Set` object from the array using the spread operator (`...`). A `Set` is an object that only stores unique values, so by spreading our original array into this new `Set` object, we effectively remove all the duplicates.

Finally, we convert the `Set` object back into an array using the spread operator again, and store the result in the `uniqueArr` constant. The resulting array only contains the unique elements from the original `arr` array.