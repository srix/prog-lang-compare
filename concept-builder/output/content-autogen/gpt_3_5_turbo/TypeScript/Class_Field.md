In TypeScript, a field is a variable declared within a class. Fields are used to store data and perform operations on the class members. 

To create a field in a TypeScript class, the `public`, `private` or `protected` keyword can be used followed by the field name and a colon, then the data type of the field. For example, in the following class `person`, `age` is a field with a data type of `number`:

```typescript
class Person {
  public name: string;
  private age: number;
}
```

In the above example, `name` is a public field, which means it can be accessed and modified from outside the class. `age` is private, which means it can only be accessed and modified within the class.

An example of using fields in TypeScript is given below:

```typescript
class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello(): void {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
  }
}

const john = new Person("John", 24);
john.sayHello();  // "Hello, my name is John. I am 24 years old." is logged to the console.
```

In the example above, we create a Person class with fields `name` and `age`. We then create a constructor method that takes in values for these fields and assigns them to `this.name` and `this.age`. We also add a method `sayHello()` to the class that uses the `name` and `age` fields to log a message to the console.

We then create an instance of the `Person` class and call the `sayHello()` method on it, which logs the message to the console.