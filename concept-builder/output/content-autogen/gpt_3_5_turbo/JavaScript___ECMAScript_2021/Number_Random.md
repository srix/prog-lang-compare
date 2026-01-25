Random numbers in JavaScript can be generated using the Math object's random() method, which returns a random number between 0 (inclusive) and 1 (exclusive). Here is an example:

```js
const randomNumber = Math.random(); // generates a random number between 0 and 1
console.log(randomNumber);
```

To generate a random integer within a specified range, you can use the Math.floor() and Math.ceil() functions, like this:

```js
const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInteger);
```

In the above example, the Math.random() method generates a random number between 0 and 1. We then multiply it by the difference between the max and the min values, add the min value and then apply the Math.floor() function. This generates a random integer that is within the specified range of min and max (inclusive).

For instance, suppose you want to generate a random number between 1 and 10 using the Math object. You can apply the following code snippet to achieve that:

```js
const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);
```

This code will generate a random integer between 1 and 10 (inclusive).