Sure! A closure in JavaScript is a combination of a function and the lexical environment within which that function is defined. Essentially, it allows a function to access an outer function's variable or parameter even after the outer function has returned.

Here's an example:

```
function outerFunction() {
  const outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // Output: "I am outside!"
```

In this example, `innerFunction` is defined inside of `outerFunction`. When `outerFunction` is called and `myInnerFunction` is assigned the result of `outerFunction`, `outerVariable` is captured by the closure and is available to `innerFunction`, even though `outerFunction` has since returned.

Here's another example:

```
function createIncrementer(initialValue) {
  return function() {
    initialValue++;
    console.log(initialValue);
  }
}

const increment = createIncrementer(0);
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
```

In this example, `createIncrementer` returns a function that increments the `initialValue` parameter each time it is called. The `initialValue` value is captured by the closure, so each time `increment()` is called, it gets incremented by one.

I hope this helps! Let me know if you have any more questions.