In JavaScript - ECMAScript 2021, you can concatenate two arrays using the `concat()` method. This method combines two or more arrays into one new array without modifying the original arrays. 

Here is the syntax for the `concat()` method:

```
const newArray = array1.concat(array2);
```

Where `array1` and `array2` are the arrays that you want to concatenate. The `concat()` method returns a new array that contains all the elements from `array1` and `array2`.

Here's an example:

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = arr1.concat(arr2);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```

You can also concatenate more than two arrays by passing them as arguments to the `concat()` method:

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const newArray = arr1.concat(arr2, arr3);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
``` 

Note that the `concat()` method does not modify the original arrays. It creates a new array with the combined elements from the original arrays.