In TypeScript, we can set default values for function arguments. This means that if a value is not passed in as an argument when calling the function, the default value will be used instead. 

Here is an example:

```
function greet(name: string = "World"): void {
  console.log(`Hello, ${name}!`);
}

greet(); // output: Hello, World!
greet("Alice"); // output: Hello, Alice!
```

In this example, the `greet` function takes a `name` argument as a string, with a default value of "World". When the function is called without an argument, "World" is used as the default value for `name`. However, when the function is called with an argument, the supplied argument is used instead of the default value.

We can also use default values for optional parameters. Here is an example:

```
function calculateArea(length: number, width: number = length): number {
  return length * width;
}

console.log(calculateArea(3)); // output: 9
console.log(calculateArea(3, 4)); // output: 12
```

In this example, the `calculateArea` function takes two arguments: `length` and `width`. `width` has a default value of `length`, so if `width` is not specified, it will default to the value of `length`. If `width` is specified, that value will be used instead.