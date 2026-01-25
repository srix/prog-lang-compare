In JavaScript - ECMAScript 2021, you can return a value from a method or function using the "return" keyword followed by the value you want to return. Here's an example:

```
// Function to check if a number is even or odd
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Call the function with the number 4
let result = isEven(4); // Returns true
```

In this example, the "isEven" function takes in a number and checks if it's even or odd. If the number is even, the function returns true. Otherwise, it returns false. The "result" variable stores the value returned by the function.

Another example:

```
// Function to calculate the area of a rectangle
function calculateArea(width, height) {
  let area = width * height;
  return area;
}

// Call the function with width = 5 and height = 10
let area = calculateArea(5, 10); // Returns 50
```

In this example, the "calculateArea" function takes in the width and height of a rectangle, calculates its area, and returns the result. The "area" variable stores the value returned by the function.