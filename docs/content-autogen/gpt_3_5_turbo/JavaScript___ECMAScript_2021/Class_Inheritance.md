In JavaScript (ECMAScript 2021), we can use the concept of inheritance to create a class that inherits properties and methods from another class. This is done through the use of the `extends` keyword. Here's the syntax for creating a derived class that inherits from a base class:

```
class BaseClass {
  constructor() {
    this.baseProperty = 'Base class property';
  }

  baseMethod() {
    console.log('This is a base class method.');
  }
}

class DerivedClass extends BaseClass {
  constructor() {
    super();
    this.derivedProperty = 'Derived class property';
  }

  derivedMethod() {
    console.log('This is a derived class method.');
  }
}
```

In this example, `DerivedClass` is derived from `BaseClass`. The `extends` keyword is used to specify the base class that `DerivedClass` is derived from. `super()` is used in the derived class constructor to call the constructor of the base class. This allows us to inherit properties from the base class.

Let's take a look at an example of how this works:

```
const instance = new DerivedClass();
console.log(instance.baseProperty);  // Output: "Base class property"
console.log(instance.derivedProperty);  // Output: "Derived class property"
instance.baseMethod();  // Output: "This is a base class method."
instance.derivedMethod();  // Output: "This is a derived class method."
```

As you can see, we can access properties and methods from both the base class and derived class using an instance of the derived class.

In conclusion, inheritance is a powerful concept in object-oriented programming that allows us to reuse code and create classes that are related to each other. In JavaScript (ECMAScript 2021), we can use the `extends` keyword to create derived classes that inherit from base classes.