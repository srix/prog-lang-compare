To change all elements of an array, you can use various array methods that modify the original array. Here are some examples:

1. Using the `fill()` method:
   ```
   const arr = [1, 2, 3, 4];
   arr.fill(0);
   console.log(arr); // Output: [0, 0, 0, 0]
   ```
   In the example above, the `fill()` method replaces all elements of the `arr` array with `0`.

2. Using the `map()` method:
   ```
   const arr = [1, 2, 3, 4];
   const newArr = arr.map(item => item * 2);
   console.log(newArr); // Output: [2, 4, 6, 8]
   ```
   In the example above, the `map()` method creates a new array (`newArr`) with all elements of the `arr` array multiplied by `2`.

3. Using the `forEach()` method:
   ```
   const arr = [1, 2, 3, 4];
   arr.forEach((item, index) => {
     arr[index] = item * 2;
   });
   console.log(arr); // Output: [2, 4, 6, 8]
   ```
   In the example above, the `forEach()` method iterates over each element of the `arr` array and multiplies it by `2`. The updated values are then assigned back to the `arr` array using the `index` parameter.

Note that each of these methods modifies the original array, so be careful when using them in your code.