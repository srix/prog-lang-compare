In TypeScript, you can concatenate strings using the `+` operator or the string interpolation syntax `${}`. Here are some examples:

```typescript
// Using the + operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// Using the string interpolation syntax ${}
let city = "New York";
let state = "NY";
let address = `123 Main St, ${city}, ${state}`;
console.log(address); // "123 Main St, New York, NY"
```

In the first example, we declare two variables `firstName` and `lastName`, and then concatenate them into `fullName` using the `+` operator and a space character as a delimiter.

In the second example, we declare two variables `city` and `state`, and then use the string interpolation syntax `${}` to insert their values into a template string for `address`. The backticks `(` `)` are used to enclose the template string.