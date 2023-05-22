Destructuring assignment is a feature in JavaScript that allows you to unpack values from an array, or properties from an object, into distinct variables. This can be helpful when writing code that needs to access a small subset of values from a larger data structure. Here is an example of using destructuring assignment to extract values from an array:

```javascript
const myArray = [1, 2, 3, 4, 5];

const [first, second, , fourth] = myArray;

console.log(first);    // Output: 1
console.log(second);   // Output: 2
console.log(fourth);   // Output: 4
```

In this example, we use array destructuring to extract the first, second, and fourth elements of `myArray`. We leave the third element empty by including a comma with no variable name.

Here is an example of using destructuring assignment to extract properties from an object:

```javascript
const myObj = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

const { name, age, address: { city } } = myObj;

console.log(name);   // Output: John
console.log(age);    // Output: 30
console.log(city);   // Output: Anytown
```

In this example, we use object destructuring to extract the `name`, `age`, and `city` properties from `myObj`. We also use destructuring to extract the nested `address` property and assign it to a variable named `address`. 

In both cases, you can also provide default values for variables in case the corresponding value in the array or object is undefined:

```javascript
const myArray = [1, 2];

const [first, second, third = 3] = myArray;

console.log(third);   // Output: 3
```

In this case, because `myArray` only has two elements, the value of `third` is set to the default value of 3 since there is no third value in the array.