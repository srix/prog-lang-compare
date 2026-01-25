In JavaScript, we can convert a string to an integer by using the `parseInt()` method. This method takes a string as input and returns an integer.

Here's an example of how to use `parseInt()`:

```javascript
const myString = '42';
const myInt = parseInt(myString);
console.log(typeof myInt); // Output: 'number'
console.log(myInt); // Output: 42
```

In this example, we first declare a string variable `myString` with the value of `'42'`. We then use `parseInt()` to convert `myString` to an integer and assign the result to the variable `myInt`.

Note that `typeof myInt` will return `'number'`, indicating that the value of `myInt` is an integer.

If the string contains non-numeric characters, `parseInt()` will return `NaN` (Not a Number). For instance:

```javascript
const myString = '42abc';
const myInt = parseInt(myString);
console.log(typeof myInt); // Output: 'number'
console.log(myInt); // Output: 42
```

In this case, `parseInt()` ignores the `"abc"` part and returns `42`. Keep in mind that `parseInt()` only converts the first set of numeric characters in the string and ignores everything else.