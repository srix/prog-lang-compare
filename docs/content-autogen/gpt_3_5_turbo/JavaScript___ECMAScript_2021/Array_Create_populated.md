To create an array in JavaScript - ECMAScript 2021, you can use the square brackets notation. Here are some examples:

1. Creating an empty array:

```
let myArray = [];
```

2. Creating an array with initial elements:

```
let myArray = ["apple", "banana", "orange"];
```

3. Creating an array with a specific size:

```
let myArray = new Array(3);
```
The above code will create an array with 3 empty slots and can be filled later

```
let myFilledArray = new Array(3).fill(0);
```
The above code will create an array with 3 elements filled with zeros.

4. Creating an array with a mixture of data types:

```
let myArray = ["apple", 42, true, {name: "John"}];
```

Note: Arrays in JavaScript are dynamic, which means that you can add and remove elements from an array at runtime.