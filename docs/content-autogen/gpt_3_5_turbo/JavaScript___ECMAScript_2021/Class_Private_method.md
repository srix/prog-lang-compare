In JavaScript - ECMAScript 2021, private methods can be defined using a new syntax called "private class fields". This syntax use the `#` symbol to mark a method as private.

Here is an example of how to define a class with private methods in JavaScript-ES2021:

```javascript
class MyClass {
  #privateMethod () {
    console.log('This is a private method.')
  }

  publicMethod () {
    console.log('This is a public method.')
    // calling a private method
    this.#privateMethod()
  }
}

let myObj = new MyClass()
myObj.publicMethod() // Output: This is a public method. This is a private method.
myObj.#privateMethod() // Uncaught SyntaxError: Private field '#privateMethod' must be declared in an enclosing class.
```

In this example, `MyClass` is defined with a private method `#privateMethod()` and a public method `publicMethod()`. 

To access the private method from within the public method, we use `this.#privateMethod()`. 

However, attempting to access the private method from outside the class, such as `myObj.#privateMethod()`, will result in an error. This is because private methods, like other private class fields, are not accessible from outside the class they were defined in.

By using private class fields, we can ensure that our private methods remain inaccessible and unmodified from outside the class, providing a secure and encapsulated solution.