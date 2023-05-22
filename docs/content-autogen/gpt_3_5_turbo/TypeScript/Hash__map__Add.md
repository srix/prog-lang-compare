In TypeScript, you can add an element to a hash using the following syntax:

```typescript
hashName[key] = value;
```

Where `hashName` is the name of your hash (or object), `key` is the name of the key you want to add, and `value` is the value you want to associate with that key. Here is an example:

```typescript
let myHash = {
  name: 'John',
  age: 30,
  city: 'New York'
};

myHash['occupation'] = 'Teacher';

console.log(myHash);
```

In this example, we create a hash called `myHash` with three keys: `name`, `age`, and `city`. We then add a new key called `occupation` with the value `'Teacher'`. When we log `myHash` to the console, we see that the new key has been added:

```
{ name: 'John', age: 30, city: 'New York', occupation: 'Teacher' }
```