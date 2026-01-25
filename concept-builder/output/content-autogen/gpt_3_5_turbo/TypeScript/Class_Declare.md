In TypeScript, a class is defined using the `class` keyword. Here's an example of how to declare a class in TypeScript:

```
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

let person = new Person("John", 30);
person.sayHello();
```

In this example, we have defined a `Person` class with two properties: `name` of type `string` and `age` of type `number`. We have also defined a constructor that takes in two parameters, `name` and `age`, and assigns them to the class properties.

Additionally, we have defined a method called `sayHello` which logs out a message to the console using the class properties.

To create a new instance of the `Person` class, we use the `new` keyword followed by the class name and passing in the required parameters to the constructor. Finally, we call the `sayHello` method on the `person` instance to log out the message.