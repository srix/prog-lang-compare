Boolean in JavaScript - ECMAScript 2021 is a data type with only two possible values: true or false. It is commonly used to control conditions and loops in a program.

The syntax to declare a boolean variable in JavaScript is:

```javascript
let myBool = true;
```

Here, "myBool" is the name of the variable and "true" is the boolean value.

Boolean operators are used to compare values and return a boolean value. The following boolean operators are available in JavaScript:

```javascript
// Equality operators
console.log(1 == 1); // Output: true
console.log(1 === '1'); // Output: false

// Inequality operators
console.log(1 != 2); // Output: true
console.log(1 !== '1'); // Output: true

// Comparison operators
console.log(5 > 3); // Output: true
console.log(10 < 4); // Output: false

// Logical operators
console.log(true && false); // Output: false
console.log(true || false); // Output: true
console.log(!true); // Output: false
```

In the first two examples, the equality operators compare two values and return a boolean value. The first example returns true because both values are equal, while the second example returns false because one value is a string and the other is a number.

In the next two examples, the inequality operators compare two values and return a boolean value. The first example returns true because both values are not equal, while the second example returns true because one value is a string and the other is a number.

In the third and fourth examples, the comparison operators compare two values and return a boolean value. The first example returns true because the left value is greater than the right value, while the second example returns false because the left value is less than the right value.

In the last set of examples, the logical operators compare two boolean values and return a boolean value. The first example returns false because both boolean values are not true, while the second example returns true because at least one boolean value is true. The final example returns false because the boolean value is negated by the "!" operator.

These are some basic examples of using boolean in JavaScript - ECMAScript 2021, and they can be used to implement complex boolean expressions, conditional statements, and loops in a program.