To generate random numbers in TypeScript, you can use the `Math.random()` function. This function returns a random number between 0 (inclusive) and 1 (exclusive). You can then multiply this number by the range you want to generate random numbers within and add an offset value to shift the range.

Here's an example code snippet that generates a random integer between a minimum value and a maximum value, inclusive:

```typescript
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // generates a random integer between 1 and 10, inclusive
```

This code first sets the minimum and maximum values to be integers by using `Math.ceil()` and `Math.floor()`. It then generates a random number between 0 and the range of values, inclusive, by multiplying `Math.random()` by the range and then adding the minimum value. Finally, it rounds the result down to the nearest integer using `Math.floor()`.

Alternatively, you can use a library like `lodash` or `faker` to generate more complex random numbers or data. Here's an example using `lodash` to generate a random floating-point number between a minimum and maximum value:

```typescript
import _ from 'lodash';

const randomNum = _.random(1.5, 10.2, true);
console.log(randomNum); // generates a random number between 1.5 and 10.2, inclusive
``` 

This code imports the `random()` function from `lodash` and then calls it with the minimum and maximum values as arguments. The `true` argument tells the function to generate a floating-point number, rather than an integer.