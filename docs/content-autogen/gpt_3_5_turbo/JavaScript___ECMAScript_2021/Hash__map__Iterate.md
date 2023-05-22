To iterate over a hash (also known as an object) in JavaScript - ECMAScript 2021, you can use several methods. Here are some examples:

1. for...in loop:

The for...in loop allows you to iterate over the properties of an object. Here is an example:

```
const hash = {foo: 1, bar: 2, baz: 3};
for (const key in hash) {
  console.log(`${key}: ${hash[key]}`);
}
```

Output:

```
foo: 1
bar: 2
baz: 3
```

2. Object.entries() method:

The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. Here is an example:

```
const hash = {foo: 1, bar: 2, baz: 3};
for (const [key, value] of Object.entries(hash)) {
  console.log(`${key}: ${value}`);
}
```

Output:

```
foo: 1
bar: 2
baz: 3
```

3. Object.keys() with forEach() method:

The Object.keys() method returns an array of a given object's own enumerable property names. You can then use the forEach() method to iterate over the keys and access the corresponding values from the object. Here is an example:

```
const hash = {foo: 1, bar: 2, baz: 3};
Object.keys(hash).forEach((key) => {
  console.log(`${key}: ${hash[key]}`);
});
```

Output:

```
foo: 1
bar: 2
baz: 3
```

Note: It's important to keep in mind that the order of iteration over object properties is not guaranteed.