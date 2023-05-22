In TypeScript, the `switch` statement can be used as an alternative to a series of `else if` statements. Here's an example:

```TypeScript
let color: string = 'green';

switch (color) {
  case 'red':
    console.log('The color is red.');
    break;
  case 'green':
    console.log('The color is green.');
    break;
  case 'blue':
    console.log('The color is blue.');
    break;
  default:
    console.log('The color is not red, green, or blue.');
}
```

This code will output "The color is green." because the value of the `color` variable is 'green'. The `switch` statement takes the place of multiple `if` statements and checks the value of the `color` variable against each `case` statement. If the `color` variable matches a `case` statement, the code inside that statement is executed. The `break` keyword is used to exit the `switch` statement once a match is found. 

The `default` statement is executed if none of the `case` statements match the value of the `color` variable. This is equivalent to an `else` statement in a series of `if` statements.

Using a `switch` statement can make the code more concise and easier to read, especially when checking against multiple values.