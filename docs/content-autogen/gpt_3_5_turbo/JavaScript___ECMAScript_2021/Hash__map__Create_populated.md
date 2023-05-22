A hash in JavaScript is simply an object that contains key-value pairs. With ECMAScript 2021, you can create a hash using the `Map` object or using the object literal notation with computed property names in square brackets. Here are examples for both approaches:

## Using the `Map` object

```javascript
// Create a new map
const hash = new Map();

// Add key-value pairs
hash.set('key1', 'value1');
hash.set('key2', 'value2');

// Access a value using its key
console.log(hash.get('key1')); // output: 'value1'
console.log(hash.get('key2')); // output: 'value2'
```

## Using object literal notation with computed property names

```javascript
// Create the hash object
const hash = {
  ['key1']: 'value1',
  ['key2']: 'value2'
};

// Access a value using its key
console.log(hash['key1']); // output: 'value1'
console.log(hash['key2']); // output: 'value2'
```

In both examples, we define key-value pairs and then access their values using their respective keys. The `Map` object is generally recommended when you need to manage a larger number of key-value pairs and need to perform more advanced operations, such as iterating over all key-value pairs in the map. On the other hand, using object literal notation can be more concise and easier to read in some cases, especially when you have a small number of key-value pairs.