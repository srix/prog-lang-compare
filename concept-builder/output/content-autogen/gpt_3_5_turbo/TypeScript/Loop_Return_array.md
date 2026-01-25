In TypeScript, an array is a collection of elements of the same type. To return an array in TypeScript, we can define a function that takes some input arguments, processes them, and returns an array as its output.

Here is an example of a function that returns an array of string values:

```
function getNames(): string[] {
  const names: string[] = ["Alice", "Bob", "Charlie"];
  return names;
}

const names: string[] = getNames();
console.log(names); // ["Alice", "Bob", "Charlie"]
```

In this example, the `getNames()` function defines an array variable called `names` and initializes it with three string values. The function then returns this array using the `return` keyword. The return type of this function is specified as `string[]`, which indicates that the function will return an array of strings.

To call this function and get the returned array, we define another variable called `names`, and set it equal to a call to the `getNames()` function. We can then log out the `names` array to the console using the `console.log()` function.

Note that we can also define the array variable inline with the function return statement, like this:

```
function getNames(): string[] {
  return ["Alice", "Bob", "Charlie"];
}
```

This is a shorthand way to define and return an array at the same time in TypeScript.