Mixins in JavaScript are a way to reuse and share code between objects without using inheritance. Mixins allow you to add behaviors and properties to an object without changing its original structure. In ECMAScript 2021, there was no specific language feature introduced for Mixins. However, you can still use the concept of Mixins in JavaScript with the help of object composition and spread syntax.

Here's an example of creating a Mixin:

```
const CarMixin = {
  drive() {
    console.log("Driving...");
  },
  stop() {
    console.log("Stopped.");
  }
}
```

In the above example, we have created a CarMixin object with two methods, drive() and stop(). These methods can be used by any object that needs them.

Now, let's create an object and use the CarMixin:

```
const Car = {
  make: "Toyota",
  model: "Corolla"
};

Object.assign(Car, CarMixin);

Car.drive(); // Output: "Driving..."
Car.stop(); // Output: "Stopped."
```

In the above example, we have used the spread syntax to add the CarMixin object to the Car object. We can now call the drive() and stop() methods on the Car object.

You can also create a Class and use Mixins in it:

```
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

const CarMixin = {
  drive() {
    console.log("Driving...");
  },
  stop() {
    console.log("Stopped.");
  }
}

Object.assign(Car.prototype, CarMixin);

const myCar = new Car("Toyota", "Corolla");
myCar.drive(); // Output: "Driving..."
myCar.stop(); // Output: "Stopped."
```

In the above example, we have created a Car class and added the CarMixin to its prototype. We can now call the drive() and stop() methods on the myCar instance of the Car class.

In conclusion, Mixins in JavaScript are a useful way to share code between objects and avoid class hierarchy. In ECMAScript 2021, there is no specific language feature for Mixins, but we can still use the concept of Mixins with the help of object composition and spread syntax.