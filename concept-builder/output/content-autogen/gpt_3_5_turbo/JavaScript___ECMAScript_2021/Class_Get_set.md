Getters and setters are used to provide more control over the access to class properties in JavaScript. Getters are used to retrieve the value of an object's property, while setters are used to modify it. In this way, we can ensure that the properties of a class are accessed or modified in a controlled way, which can be helpful in preventing errors.

To define a getter or setter in a class, we use the `get` and `set` keywords followed by the name of the property. Here's an example:

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    this._name = newName;
  }
}

let person = new Person("John");

console.log(person.name); // Output: John

person.name = "David";
console.log(person.name); // Output: David
```

In the above example, we created a `Person` class with a `name` property. We defined a getter and a setter for the `name` property. The getter returns the value of the `_name` property, while the setter sets the value of `_name` to the parameter passed to it.

To access the `name` property, we simply use the dot notation (`person.name`). When we want to set a new value for the `name` property, we use the setter (`person.name = "David"`).

Note that we used the `_name` property instead of `name` in the constructor. This is because the getter and setter use the property name `name`, so if we also used the same name in the constructor, we would have a name conflict.

Another useful feature of getters and setters is that they can be used to compute properties on the fly. Here's an example:

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // Getter
  get diameter() {
    return this._radius * 2;
  }

  // Setter
  set diameter(newDiameter) {
    this._radius = newDiameter / 2;
  }
}

let circle = new Circle(5);

console.log(circle.radius); // Output: 5
console.log(circle.diameter); // Output: 10

circle.diameter = 14;
console.log(circle.radius); // Output: 7
console.log(circle.diameter); // Output: 14
```

In the above example, we created a `Circle` class with a `radius` property. We also defined a getter and a setter for the `diameter` property. The getter computes the diameter based on the value of `radius`, while the setter sets the value of `radius` based on the new diameter.

To access the `diameter` property, we again use the dot notation (`circle.diameter`). When we want to set a new value for the `diameter` property, we use the setter (`circle.diameter = 14`).