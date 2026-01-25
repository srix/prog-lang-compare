In TypeScript, closures are created when an inner function accesses variables from an outer function. It allows you to maintain access to the outer function's scope even when the outer function has returned. Here's an example:

```
function outerFunction() {
  let outerVariable = 'I am from outer function'
  
  function innerFunction() {
    console.log(outerVariable)
  }
  
  return innerFunction
}

let innerFunc = outerFunction()
innerFunc() // Output: I am from outer function
```

In this example, `innerFunction` is a closure because it's accessing the variable `outerVariable` defined in `outerFunction`. When you execute `outerFunction()`, it returns the `innerFunction` which is then assigned to the variable `innerFunc`. When `innerFunc()` is called, it still has access to the `outerVariable` even though `outerFunction` has already returned.

Here's another example where you can pass arguments to the inner function:

```
function greeting(name: string) {
  function sayHello() {
    console.log(`Hello, ${name}!`)
  }
  
  return sayHello
}

let helloFunc = greeting('John')
helloFunc() // Output: Hello, John!
```

In this example, `greeting` is a function that returns `sayHello` function. The `sayHello` function has access to the `name` argument passed to `greeting` because of the closure. When `helloFunc` is called, it logs the greeting with the passed-in `name`.