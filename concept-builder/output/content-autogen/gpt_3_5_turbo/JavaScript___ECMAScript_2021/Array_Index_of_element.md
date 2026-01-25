To get the index of an element in an array in JavaScript - ECMAScript 2021, we can use the `indexOf()` and `findIndex()` methods. Here are some examples:

1. Using `indexOf()` method:
The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present. 

```javascript
const fruits = ["apple", "banana", "orange", "mango"];

// Get index of "banana"
console.log(fruits.indexOf("banana")); // Output: 1

// Get index of "pear", which is not present in array
console.log(fruits.indexOf("pear")); // Output: -1
```

2. Using `findIndex()` method:
The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.

```javascript
const people = [
  { name: "John", age: 25 },
  { name: "Mary", age: 30 },
  { name: "Peter", age: 35 },
  { name: "Ann", age: 20 }
];

// Find index of Peter
const index = people.findIndex(person => person.name === "Peter");
console.log(index); // Output: 2

// Find index of person whose age is greater than 30
const ageIndex = people.findIndex(person => person.age > 30);
console.log(ageIndex); // Output: 2
```

Note: Both `indexOf()` and `findIndex()` methods return the index of the first occurrence of the element that matches the specified criteria. However, `indexOf()` only works with primitive types (strings, numbers, etc.), while `findIndex()` can work with any type of array elements.