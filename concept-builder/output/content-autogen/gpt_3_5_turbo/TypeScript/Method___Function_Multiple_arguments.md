In TypeScript, we can use multiple arguments in a method or function by specifying the type of each argument separated by a comma.

Here is an example of a function with two arguments:

```
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

let sum = addNumbers(10, 20);
console.log(sum); //Output: 30
```

In the above code, we have a function named `addNumbers` that takes two arguments, both of type `number`. The function then returns the sum of these two numbers.

To use this function, we simply call it with two arguments (`10` and `20`) and store the returned value in a variable named `sum`.

We can define functions with more than two parameters as well. Here is an example:

```
function printDetails(name: string, age: number, email: string): void {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}

printDetails("John", 25, "john@example.com");
```

In this example, we have a function named `printDetails` that takes three arguments - `name` of type `string`, `age` of type `number`, and `email` of type `string`. The function logs the details to the console when called.

To use this function, we simply call it with three arguments - the name, age, and email of the person we want to print the details of.