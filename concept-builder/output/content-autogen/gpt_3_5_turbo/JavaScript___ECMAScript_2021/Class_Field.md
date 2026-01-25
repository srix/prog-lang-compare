Fields in JavaScript - ECMAScript 2021 are a new way to define and manage data within class definitions. Fields are similar to class properties in other object-oriented programming languages. Fields provide a more straightforward syntax compared to traditional properties, making it easier to manage class data. 

Fields are declared by adding a # before the field name, and they can be assigned a value in the declaration itself. Fields can also include a getter and setter method, which can provide more control over how the data is accessed and modified.

Here is an example of declaring a field in a class:

```
class Person {
  #name = '';

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}
```

In this example, the `Person` class has a private field called `#name` that is initialized to an empty string. The field is accessed and modified using the `getName()` and `setName()` methods.

Here is an example of declaring a field with a getter and setter method:

```
class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(radius) {
    if (radius < 0) {
      throw new Error("Radius cannot be negative");
    }
    this.#radius = radius;
  }

  get area() {
    return Math.PI * this.#radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // Output: 5
console.log(circle.area); // Output: 78.53981633974483
circle.radius = 10;
console.log(circle.radius); // Output: 10
console.log(circle.area); // Output: 314.1592653589793
```

In this example, the `Circle` class has a private field called `#radius` that is initialized with the passed-in value. The field has a getter and setter method which control the access to the `#radius` field. The `get area()` method calculates the area of the circle using the `#radius` field and the formula for the area of a circle. 

These are just a few examples of using fields in a class in JavaScript - ECMAScript 2021. Fields provide a cleaner syntax and a more straightforward way of managing class data compared to traditional properties.