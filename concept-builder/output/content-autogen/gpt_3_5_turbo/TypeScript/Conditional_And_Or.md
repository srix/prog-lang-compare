In TypeScript, the "OR" symbol is represented by `|`. It is used to define a variable as having either one type or another type. Here's an example:

```
let myValue: string | number;

myValue = 'Hello'; // Valid
myValue = 100; // Valid
myValue = false; // Invalid
```

In the above example, `myValue` is defined as having either a string or a number as its value. It cannot have any other value.

The `|` operator can also be used with interfaces to create a type that includes a combination of types. Here's an example:

```
interface Car {
  make: string;
  model: string;
}

interface Motorcycle {
  make: string;
  model: string;
  engineSize: number;
}

type Vehicle = Car | Motorcycle;

const car: Vehicle = {
  make: 'Toyota',
  model: 'Corolla'
};

const motorcycle: Vehicle = {
  make: 'Harley-Davidson',
  model: 'Sportster 1200',
  engineSize: 1200
};
```

In the above example, the `Vehicle` type is defined as either a `Car` or a `Motorcycle`. The `car` variable only has the `make` and `model` properties, while the `motorcycle` variable has those properties as well as an `engineSize` property.