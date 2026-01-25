Block passing is a TypeScript feature that allows you to capture and pass the variables from the outer scope to inner scope in a single block statement. Here's how to use it:

First, assign your variables in the outer scope:

```
let firstName = "John";
let lastName = "Doe";
let age = 30;
```

Then, you can use block passing syntax to pass these variables to an inner scope:

```
{
  let firstName = "Jane", age = 25;
  // inner scope block code here
}
```

Note that the variables passed with the inner block will have a higher precedence over the outer-scope variables of the same name.

Here's an example that puts these concepts into practice:

```
let firstName = "John";
let lastName = "Doe";
let age = 30;

{
  let firstName = "Jane", age = 25;
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
  // output: "Name: Jane Doe, Age: 25"
}

console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
// output: "Name: John Doe, Age: 30"
```

In this example, we used block passing to temporarily override the variables `firstName` and `age`. When we logged out the values inside the block, we saw that the inner variables were used. However, outside the block, the original values were preserved.