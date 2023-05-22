In TypeScript, you can check if a class has a method using the `typeof` operator. The `typeof` operator gives the type of the operand. If the operand is a class name, then the type is the constructor function, and you can check for the method using the `instanceof` operator.

Here's an example:

```typescript
class Person {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John");

console.log(typeof Person); // outputs "function"
console.log(john instanceof Person); // outputs "true"
console.log('sayHello' in john); // outputs "true"
```

In this example, we define a `Person` class with a `sayHello` method. We then create an instance of the class and use the `typeof` operator to get the type of the `Person` class, which is a constructor function. We also use the `instanceof` operator to check if the `john` variable is an instance of the `Person` class. Finally, we use the `in` operator to check if the `john` object has a `sayHello` method.