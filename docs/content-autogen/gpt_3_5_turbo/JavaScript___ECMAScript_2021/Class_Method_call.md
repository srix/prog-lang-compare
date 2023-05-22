Sure, I'd be happy to help!

In JavaScript - ECMAScript 2021, calling a method in a class involves using the dot notation to access the method and then passing any necessary arguments. Here's an example:

```javascript
class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
}

// Creating an instance of the class
const myCalculator = new Calculator();

// Calling the add method on the instance
const result = myCalculator.add(5, 7);

console.log(result); // Output: 12
```

In this example, we have defined a simple `Calculator` class with an `add` method that takes two arguments and returns their sum. We then create an instance of the class called `myCalculator` and call the `add` method on this instance, passing in the arguments `5` and `7`. The result of this method call is stored in the `result` variable, which we then log to the console.

I hope this helps! Let me know if you have any further questions.