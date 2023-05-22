In JavaScript, there are a few ways to check if a class has a method depending on your specific needs. I'll explain three ways to do so below.

1. Using the `hasOwnProperty()` method:

The `hasOwnProperty()` method checks if a specific property exists in an object. Classes are just special types of objects, so we can use this method to check if a class has a certain method. 

Example:

```
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const john = new Person('John');

console.log(john.hasOwnProperty('sayHello')); // Output: true
console.log(john.hasOwnProperty('nonExistentMethod')); // Output: false
```

In the example above, we create a class `Person` with a `sayHello()` method. We then create an instance of the class `john` and use the `hasOwnProperty()` method to check if the class has a `sayHello()` method. The method returns `true` because the class does indeed have a `sayHello()` method.

2. Using the `in` operator:

The `in` operator checks if a property exists in an object or its prototype chain. We can use this operator to check if a method exists in a class.

Example:

```
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const john = new Person('John');

console.log('sayHello' in john); // Output: true
console.log('nonExistentMethod' in john); // Output: false
```

In this example, we use the `in` operator to check if `john` has a `sayHello()` method. The operator returns `true` because the class does indeed have a `sayHello()` method.

3. Using the `typeof` operator:

We can also use the `typeof` operator to check if a class has a specific method. This method is useful if you want to know the type of a given method.

Example:

```
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const john = new Person('John');

console.log(typeof john.sayHello === 'function'); // Output: true
console.log(typeof john.nonExistentMethod === 'function'); // Output: false
```

In this example, we use the `typeof` operator to check if `john` has a `sayHello()` method. The operator returns `true` because `sayHello()` is a function. We also use the operator to check for a non-existent method `nonExistentMethod`, and it returns `false`.

Overall, there are multiple ways to check if a class has a method in JavaScript. Depending on your specific needs, you can choose to use the `hasOwnProperty()` method, the `in` operator, or the `typeof` operator, or even a combination of these methods.