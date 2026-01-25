In JavaScript, you can convert an integer to a float by using the Number() function. The Number() function can take an integer or a string and return a float.

Here is an example:

```javascript
let myInteger = 5;
let myFloat = Number(myInteger);

console.log(myFloat); // Output: 5
console.log(typeof myFloat); // Output: "number"
```

In this example, we first define a variable `myInteger` with a value of 5, which is an integer. We then use the Number() function to convert `myInteger` to a float and assign it to a new variable `myFloat`.

To verify that `myFloat` is a float, we use the `typeof` operator, which returns the type of the variable. In this case, we expect the type to be "number".

Here is another example using a string:

```javascript
let myString = "10";
let myFloat = Number(myString);

console.log(myFloat); // Output: 10
console.log(typeof myFloat); // Output: "number"
```

In this example, we define a variable `myString` with a value of "10", which is a string. We then use the Number() function to convert `myString` to a float and assign it to a new variable `myFloat`.

To verify that `myFloat` is a float, we use the `typeof` operator again. The output should once again be "number".