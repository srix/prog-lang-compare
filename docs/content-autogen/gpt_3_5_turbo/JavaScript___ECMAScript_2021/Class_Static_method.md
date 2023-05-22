To define a static method in a class in JavaScript - ECMAScript 2021, we need to prefix the method name with the keyword `static`.

Here's an example of how to define a static method in a class:

```javascript
class MyClass {
  static myStaticMethod() {
    console.log("This is a static method.");
  }
}

MyClass.myStaticMethod(); // Output: "This is a static method."
```

In this example, `myStaticMethod()` is the static method of the `MyClass` class. When the method is called, it outputs the string "This is a static method." to the console.

Note that static methods cannot access the `this` keyword and they can only access other static methods or properties of the class. Here's an example:

```javascript
class MyClass {
  static myStaticMethod() {
    console.log("This is a static method.");
  }

  static myOtherStaticMethod() {
    MyClass.myStaticMethod();
  }
}

MyClass.myOtherStaticMethod(); // Output: "This is a static method."
``` 

In this example, `myOtherStaticMethod()` calls the `myStaticMethod()` static method of the `MyClass` class. Since both `myOtherStaticMethod()` and `myStaticMethod()` are static methods, they can access each other without any issues.