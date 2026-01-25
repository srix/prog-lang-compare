In TypeScript, we can access instance variables from private methods by using the `this` keyword.

Here is an example:

```typescript
class MyClass {
  private myVariable: string = "Hello";

  private myPrivateMethod(): void {
    console.log(this.myVariable);
  }

  public myPublicMethod(): void {
    this.myPrivateMethod();
  }
}

const myObject = new MyClass();
myObject.myPublicMethod(); // Output: "Hello"
```

In the above example, `myVariable` is declared as a private instance variable and `myPrivateMethod` is a private function that is able to access this variable using `this.myVariable`.

When we create a new instance of `MyClass` and call the `myPublicMethod`, it calls the `myPrivateMethod` which is able to access the private instance variable `myVariable` and logs the value to the console.