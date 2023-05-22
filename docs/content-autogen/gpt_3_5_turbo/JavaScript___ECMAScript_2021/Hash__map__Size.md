To get the size of a hash (object) in JavaScript - ECMAScript 2021, we can use the `Object.keys()` method to convert the hash into an array of keys, and then use the `length` property to determine the size of the array.

Here's an example:

```javascript
const myHash = { 
  firstKey: "value1", 
  secondKey: "value2", 
  thirdKey: "value3" 
};

const size = Object.keys(myHash).length;

console.log(size); // Output: 3
```

In this example, we define a hash called `myHash` with three key-value pairs. We then call `Object.keys()` on `myHash` to get an array of its keys, and find its length using the `length` property. We store the length in a variable called `size`, and finally output the value of `size` to the console.

Note that this method will only work for hashes that have keys that are strings or symbols. If your hash has keys that aren't strings or symbols, the `Object.keys()` method won't work and you'll need to use a different approach.