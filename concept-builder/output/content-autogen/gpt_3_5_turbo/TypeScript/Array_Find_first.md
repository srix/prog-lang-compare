To find the first element of an array in TypeScript, you can use the index 0 as it represents the first element of the array. Here's an example:

```TypeScript
let myArray: number[] = [1, 2, 3, 4, 5];
let firstElement: number = myArray[0];
console.log(firstElement); // Output: 1
```

In this example, we have created an array of numbers called `myArray`, which contains the values [1, 2, 3, 4, 5]. To find the first element of the array, we have assigned the value of `myArray[0]` to the variable `firstElement`. This means that `firstElement` now contains the value 1. We can then log this value to the console using the `console.log()` function.

Another way to find the first element of an array is by using the `shift()` method. This method removes the first element of an array and returns it. Here's an example:

```TypeScript
let myArray: number[] = [1, 2, 3, 4, 5];
let firstElement: number = myArray.shift();
console.log(firstElement); // Output: 1
console.log(myArray); // Output: [2, 3, 4, 5]
```

In this example, we have used the `shift()` method to remove the first element of the array and assign it to the variable `firstElement`. This means that `firstElement` contains the value 1 and the `myArray` has been modified to contain only the elements [2, 3, 4, 5]. We can then log both `firstElement` and `myArray` to the console using the `console.log()` function.