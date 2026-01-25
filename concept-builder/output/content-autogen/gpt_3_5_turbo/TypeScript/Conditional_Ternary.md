Ternary operator is a shorthand way to write an if-else statement. In TypeScript, ternary operator has the following syntax:

```
(condition) ? value1 : value2
```

When the condition is `true`, the expression returns `value1`, otherwise it returns `value2`. Here are some examples:

Example 1: 

```
let x: number = 10;
let y: number = 5;
let result: string = (x > y) ? "x is greater than y" : "y is greater than x";
console.log(result); // Output: x is greater than y
```

Example 2:

```
let isMember: boolean = true;
let discount: number = (isMember) ? 0.2 : 0.1;
console.log(discount); // Output: 0.2
```

Example 3:

```
let age: number = 18;
let isAdult: boolean = (age >= 18) ? true : false;
console.log(isAdult); // Output: true
```

Note that you can also use nested ternary operators for more complex expressions. However, using too many nested ternary operators can make your code difficult to read and maintain.