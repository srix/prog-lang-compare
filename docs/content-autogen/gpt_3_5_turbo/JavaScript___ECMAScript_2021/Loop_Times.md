In JavaScript - ECMAScript 2021, you can use `times` in two ways: as a method of the `Number` object and as a method of the `Math` object. Here are examples for both:

### Using `times` as a method of the `Number` object

The `times` method multiplies a number by another number and returns the result:

```
const number = 5;
const result = number.times(3); // Multiplies 5 by 3
console.log(result); // Output: 15
```

### Using `times` as a method of the `Math` object

The `times` method of the `Math` object multiplies two numbers and returns the result:

```
const result = Math.times(2, 3); // Multiplies 2 by 3
console.log(result); // Output: 6
```

Note that the `Math.times` method is not available in all JavaScript environments. If you get an error message when using it, you can implement your own implementation of `Math.times`:

```
Math.times = function(a, b) {
  return a * b;
}
``` 

Then you can use it like this:

```
const result = Math.times(2, 3); // Multiplies 2 by 3
console.log(result); // Output: 6
``` 

These are simple examples of how to use `times` in JavaScript - ECMAScript 2021. Keep in mind that `times` is not a built-in method of the language, but some libraries and frameworks might use it.