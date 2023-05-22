In TypeScript, we can return a value from a method or function using the `return` statement followed by the value we want to return. Here's an example of a method that returns a string value:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("John");
console.log(message); // Output: Hello, John!
```

In the above example, the `greet` function takes a `string` parameter `name` and returns a `string` value which is a greeting message. The `return` statement returns the message with the provided name using a string interpolation.

We can also return other primitive data types like `number`, `boolean`, or even `undefined`:

```typescript
function double(value: number): number {
  return value * 2;
}

const num: number = double(5); // Returns 10
console.log(num); // Output: 10

function isValidEmail(email: string): boolean {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

const email: string = "example@test.com";
const isValid: boolean = isValidEmail(email); // Returns true
console.log(isValid); // Output: true

function doSomething(): undefined {
  // some logic here
  return undefined; // return type is undefined
}
```

In the above examples, we can see that we can return a value of same data type as that of the return type specified in the method/function signature. Additionally, we can also return `undefined` if there is no value to be returned.