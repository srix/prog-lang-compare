To declare a class in ECMAScript 2021, use the 'class' keyword followed by the class name. Here's an example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

let cat = new Animal('Fluffy');
cat.speak();
```

In this example, the `Animal` class has a constructor that sets the `name` property, and a `speak()` method that logs a message to the console. To create a new instance of the class, we use the `new` keyword with the class name, passing in any required arguments to the constructor.

Another example:

```javascript
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  introduce() {
    console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I identify as ${this.gender}.`);
  }
}

let john = new Person('John', 30, 'male');
john.introduce();
```

In this example, the `Person` class has a constructor that sets the `name`, `age` and `gender` properties, and an `introduce()` method that logs a message to the console. To create a new instance of the class, we use the `new` keyword with the class name, passing in the required arguments to the constructor.