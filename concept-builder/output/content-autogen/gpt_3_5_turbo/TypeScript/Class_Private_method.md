In TypeScript, a private method is a method that can only be accessed within the class it is defined in. It cannot be accessed outside the class or by any subclasses.

Here is an example of a class in TypeScript with a private method:

```
class MyClass {
  private myPrivateMethod(): void {
    console.log("This is a private method.");
  }

  public myPublicMethod(): void {
    console.log("This is a public method.");

    // Call the private method from within the class
    this.myPrivateMethod();
  }
}

let myObject = new MyClass();
myObject.myPublicMethod();
```

In the example above, the `MyClass` class has a private method called `myPrivateMethod()`. This method can only be called from within the class itself.

The `MyClass` class also has a public method called `myPublicMethod()`. This method can be called from outside the class.

Inside the `myPublicMethod()` method, we can call the private method `myPrivateMethod()` using the `this` keyword. Since `myPrivateMethod()` is a private method, it can only be called from within the class.

When we create an instance of the `MyClass` class and call the `myPublicMethod()` method, both the public and private methods are called and their respective console logs are outputted. However, if we try to call `myPrivateMethod()` from outside the class, we will get a compile-time error.