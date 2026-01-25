In JavaScript, we can initialize a method or function in runtime using the Function constructor or the eval function. Here are examples of each:

Using the Function Constructor:

```javascript
const functionName = new Function('param1', 'param2', 'return param1 + param2');
console.log(functionName(2,3)); // Output: 5
```

In this example, we are creating a new function called functionName using the Function constructor. We pass in the function parameters as strings and the function body as a string. We then execute this function by calling functionName with values 2 and 3. 

Using the eval Function:

```javascript
const functionBody = 'function add(a, b) { return a + b; }';
eval(functionBody);
console.log(add(2,3)); // Output: 5
```

In this example, we are creating a new function using the eval function. We define the function body as a string and pass it to the eval function. The eval function evaluates the string as JavaScript code and the `add` function becomes available. We then execute the `add` function with parameters 2 and 3.

However, it is important to note that using `eval` is generally not recommended as it can lead to security vulnerabilities in your code.