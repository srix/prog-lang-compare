In TypeScript, objects that represent a collection of key-value pairs are called `HashMap` or `Dictionary`. In JavaScript, they are commonly called objects. To check if a `HashMap` contains a specific key, you can use the `hasOwnProperty()` method. Here's an example:

```typescript
const hashMap: { [key: string]: string } = {'apple': 'red', 'banana': 'yellow', 'cherry': 'red'};
console.log(hashMap.hasOwnProperty('apple')); // true
console.log(hashMap.hasOwnProperty('orange')); // false
```

In this example, we have a `HashMap` that contains three key-value pairs. We use the `hasOwnProperty()` method to check if the `hashMap` object contains the keys 'apple' and 'orange'. The method returns `true` for the 'apple' key (because it exists in the object), and `false` for the 'orange' key (because it does not exist in the object).

Note that the `hasOwnProperty()` method only checks if the object has the key directly as its own property. It does not check if the key exists in the object's prototype chain. If you need to search for a key in the object's prototype chain, you can use the `in` operator instead:

```typescript
console.log('apple' in hashMap); // true
console.log('toString' in hashMap); // true
```

In this example, we use the `in` operator to check if the 'apple' and 'toString' keys (the latter being a key in the object's prototype chain) exist in the `hashMap` object. The operator returns `true` for both keys.