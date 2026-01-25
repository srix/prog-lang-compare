In ECMAScript 2021 and previous versions, constructors are special functions that are used to create and initialize objects created from a class. Constructors can have parameters that can be used to set the initial properties of the instance.

Here is an example of a simple constructor function in JavaScript:

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

In this example, we have defined a `Person` class with a constructor that takes two parameters: `name` and `age`. Inside the constructor, we use the keyword `this` to refer to the current instance of the `Person` class, and we set the `name` and `age` properties of the instance accordingly.

We can create new instances of the `Person` class using the `new` keyword, as follows:

```
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);
```

In this example, we have created two instances of the `Person` class: `person1` and `person2`. The first instance has a `name` of "John" and an `age` of 30, while the second instance has a `name` of "Jane" and an `age` of 25.

If we want to add methods to our `Person` class, we can simply define them inside the class, like this:

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

In this example, we have added a `sayHello` method to our `Person` class. This method simply logs a message to the console that includes the `name` and `age` properties of the current instance.

We can call this method on any instance of the `Person` class, like this:

```
person1.sayHello(); // logs "Hello, my name is John and I am 30 years old."
person2.sayHello(); // logs "Hello, my name is Jane and I am 25 years old."
```

This is just a simple example of how to use constructors in JavaScript. Constructors can be used to create more complex classes and objects with more properties and methods.