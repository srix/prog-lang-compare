In TypeScript, we can get the size of a hash using the `Object.keys()` method. This method returns an array of keys from the hash, which we can then call the `length` property on to get the size of the hash.

Here's an example:

```typescript
const myHash = {
  name: 'John',
  age: 25,
  location: {
    city: 'New York',
    state: 'NY'
  }
};

const size = Object.keys(myHash).length;
console.log(size); // Outputs 3
```

In this example, we have a hash `myHash` with 3 keys and their respective values. We call `Object.keys(myHash)` to get an array of the keys in the hash. We then call `length` on this array to get the size of the hash, which is `3`. We then log this value to the console.

Note that this method only gets the size of the hash's primary keys. If the values of the keys are also nested hashes or arrays, you would need to iterate through them and call `Object.keys()` on those as well to get their sizes.