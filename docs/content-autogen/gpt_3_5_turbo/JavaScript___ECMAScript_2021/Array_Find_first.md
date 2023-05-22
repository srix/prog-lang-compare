In JavaScript-ECMAScript 2021, we can find the first element of an array in a number of ways. Here are some examples:

1. Using array indexing: We can use square brackets after the array name to access the first element of the array. The first element has an index of 0.

```javascript
let myArray = ["apple", "banana", "grape"];
let firstElement = myArray[0];
console.log(firstElement); // Output: "apple"
```

2. Using the shift() method: The shift() method is used to remove the first element from an array and return it. This method modifies the original array.

```javascript
let myArray = ["apple", "banana", "grape"];
let firstElement = myArray.shift();
console.log(firstElement); // Output: "apple"
console.log(myArray); // Output: ["banana", "grape"]
```

3. Using array destructuring: We can use array destructuring to assign the first element of an array to a variable.

```javascript
let myArray = ["apple", "banana", "grape"];
let [firstElement] = myArray;
console.log(firstElement); // Output: "apple"
```

4. Using the slice() method: The slice() method can be used to extract a portion of an array, starting from a given position.

```javascript
let myArray = ["apple", "banana", "grape"];
let firstElement = myArray.slice(0, 1);
console.log(firstElement); // Output: ["apple"]
```

In summary, there are multiple ways to find the first element of an array in JavaScript-ECMAScript 2021. 