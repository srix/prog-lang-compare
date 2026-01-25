To get the type of an object in JavaScript ECMAScript 2021, you can use the `typeof` operator. The `typeof` operator returns a string indicating the type of the operand. Here are some examples:

1. Checking for a string:

```
let str = 'Hello World';
console.log(typeof str); // Output: string
```

2. Checking for a number:

```
let num = 123;
console.log(typeof num); // Output: number
```

3. Checking for a boolean:

```
let bool = true;
console.log(typeof bool); // Output: boolean
```

4. Checking for an object:

```
let obj = {
  name: 'John Doe',
  age: 30
};
console.log(typeof obj); // Output: object
```

5. Checking for a function:

```
function greet(name) {
  console.log('Hello, ' + name + '!');
}
console.log(typeof greet); // Output: function
```

6. Checking for an array:

```
let arr = [1, 2, 3];
console.log(typeof arr); // Output: object
console.log(Array.isArray(arr)); // Output: true
```

Note: `Array.isArray` is a method to check if the given object is an array. It returns `true` if the object is an array, otherwise, it returns `false`.