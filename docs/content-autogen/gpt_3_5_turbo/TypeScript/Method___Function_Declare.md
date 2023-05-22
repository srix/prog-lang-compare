In TypeScript, you can declare a function or method using `function` keyword followed by the function name, and then the function parameter list in parentheses. It may also include the return type of the function or method, if any.

Here's an example of declaring a function that accepts two numbers and returns their sum:

```
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
```

In this example, `addNumbers` is the name of the function, and it takes two parameters `num1` and `num2` that are both of type `number`. The `: number` after the closing parenthesis specifies that the function will return a value of type `number`.

Similarly, you can declare a method in a class in TypeScript as follows:

```
class MyClass {
  multiplyNumbers(num1: number, num2: number): number {
    return num1 * num2;
  }
}
```

In this example, `multiplyNumbers` is a method of the `MyClass` class that accepts two parameters `num1` and `num2` of type `number`. The method returns the product of the two numbers as a value of type `number`. Note that you don't need to specify the return type of a method inside a class unless it's something other than `void`.