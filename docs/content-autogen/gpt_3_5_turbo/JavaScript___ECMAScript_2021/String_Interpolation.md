In ECMAScript 2021 of JavaScript, interpolation of strings can be done using the template literals. Template literals are enclosed by back-tick (` `) instead of quotes, and placeholders can be defined by wrapping expressions with `${ }`. The expressions inside the placeholders get executed and interpolated with their results in the string.

Here's an example:

```
const name = "John";
const age = 25;
const address = "123 Main St.";

const message = `Hi, my name is ${name}. I am ${age} years old and I live at ${address}.`;

console.log(message);
```

Output:

```
Hi, my name is John. I am 25 years old and I live at 123 Main St.
```

In the above example, `${name}`, `${age}`, and `${address}` are placeholders that get evaluated and interpolated with the actual values of the variables. The resulting string is assigned to the `message` variable.

We can also use expressions inside the placeholders to perform various operations. Here's an example:

```
const num1 = 10;
const num2 = 5;

const result = `${num1} - ${num2} = ${num1 - num2}`;

console.log(result);
```

Output:

```
10 - 5 = 5
```

In the above example, we're performing arithmetic operations inside the placeholders. The resulting value of the expression gets interpolated with the string.

We can also nest template literals inside other template literals like this:

```
const name = "John";
const age = 25;
const address = "123 Main St.";

const message = `Hi, my name is ${name}. I am ${age} years old and my address is: 
${`<p>${address}</p>`}`;

console.log(message);
```

Output:

```
Hi, my name is John. I am 25 years old and my address is:
<p>123 Main St.</p>
```

In the above example, we're nesting a template literal inside another template literal to add HTML tags to the address.