In JavaScript, there are multiple ways to get the unique elements of an array. Here are a few examples using the latest version of ECMAScript (2021):

1. Using the Set objects - In ECMAScript 6, a new data structure called the Set object was introduced, which creates a collection of unique values.

```
let arr = [1, 2, 2, 3, 3, 4];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4]
```

2. Using the filter() method - This method creates a new array with all elements that pass the test implemented by the provided function. We can use this to filter out any elements that are not unique.

```
let arr = [1, 2, 2, 3, 3, 4];
let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArr); // [1, 2, 3, 4]
```

3. Using the reduce() method - This method is used to apply a function to each element of the array to reduce the array to a single value. We can use this to check if an element already exists in the array and add it only if it doesn't.

```
let arr = [1, 2, 2, 3, 3, 4];
let uniqueArr = arr.reduce((acc, val) => acc.includes(val) ? acc : [...acc, val], []);
console.log(uniqueArr); // [1, 2, 3, 4]
```

All of the above methods will give us an array containing only the unique elements of the original array.