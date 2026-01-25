Iterating over an array in JavaScript is a common programming task. There are several ways to iterate over an array in JavaScript.

1. Using a for loop: 

A for loop can be used to iterate over each element in an array. The loop runs until the last element in the array is reached. Here's an example:

```javascript
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Output:
```
1
2
3
```

2. Using forEach() method:

The forEach() method is a built-in method on the array object that allows you to execute a function on each element in an array. Here's an example:

```javascript
const arr = [1, 2, 3];

arr.forEach(function(value) {
  console.log(value);
});
```

Output:
```
1
2
3
```

3. Using for...of loop:

The for...of loop is a new loop added in ECMAScript 2015 that allows you to loop over iterable objects like arrays. Here's an example:

```javascript
const arr = [1, 2, 3];

for (const value of arr) {
  console.log(value);
}
```

Output:
```
1
2
3
```

4. Using map() method:

The map() method is a built-in method on the array object that creates a new array by executing a function on each element in an array. Here's an example:

```javascript
const arr = [1, 2, 3];

const newArr = arr.map(function(value) {
  return value * 2;
});

console.log(newArr); // [2, 4, 6]
```

These are some of the ways to iterate over an array in JavaScript - ECMAScript 2021.