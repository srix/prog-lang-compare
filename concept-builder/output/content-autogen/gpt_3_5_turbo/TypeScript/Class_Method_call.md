In TypeScript, we can call a method in a class by instantiating an object of that class and calling the method on that object. Here's an example:

```typescript
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  start() {
    console.log(`Starting the ${this.brand} car...`);
  }
}

const myCar = new Car("Toyota");
myCar.start(); // Output: "Starting the Toyota car..."
```

In the example above, we define a `Car` class with a constructor that takes a `brand` parameter and a `start` method. Then, we create an object `myCar` of the `Car` class using the `new` keyword and passing the `'Toyota'` value as a parameter. Finally, we call the `start` method on `myCar` object to output the message "Starting the Toyota car...".

We can also call methods with parameters by passing them when we call the method. Here's an example:

```typescript
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(10, 5);
const rectangleArea = myRectangle.area();
console.log(rectangleArea); // Output: 50
```

In the example above, we define a `Rectangle` class with a constructor that takes `width` and `height` parameters and an `area` method that calculates the rectangle's area. Then, we create an object `myRectangle` of the `Rectangle` class with `width` value as `10` and `height` value as `5`. Finally, we call the `area` method on `myRectangle` object and assign the result to `rectangleArea` variable which is `50`. We output this value to the console using `console.log()`.