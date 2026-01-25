In JavaScript, a private method can access instance variables with the help of a closure. A closure is a "separate" function that has access to the parent function's variables. To achieve this, we declare the instance variable outside of the private function, and then reference it within the private function. Here is an example:

```javascript
class MyClass {
  #myPrivateVar = "Hello, World!";

  #myPrivateMethod() {
    console.log(this.#myPrivateVar);
  }

  myPublicMethod() {
    console.log("This is a public method");
    this.#myPrivateMethod();
  }
}

const myObject = new MyClass();
myObject.myPublicMethod();
```

In this example, we define a class `MyClass`, which has a private instance variable, `#myPrivateVar`. We also have a private method, `#myPrivateMethod()`, which logs the value of the private variable to the console.

The public method, `myPublicMethod()`, logs a message to the console, and then calls `#myPrivateMethod()`.

When we create an instance of `MyClass` and call `myPublicMethod()`, we can see that the private method successfully logs the value of the private variable to the console. 

Note that private instance variables are denoted by the `#` symbol before their name. Private methods are also denoted by the `#` symbol before their name.