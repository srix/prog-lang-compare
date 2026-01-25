In TypeScript, inheritance can be used by creating a class that extends another class. This means that the subclass inherits all the properties and methods of the superclass. Let's take a look at an example:

```
class Animal {
  animalName: string;
  constructor(name: string) {
    this.animalName = name;
  }
  getName(): string {
    return this.animalName;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

let myDog = new Dog("Buddy");

console.log(myDog.getName()); // Output: Buddy
myDog.bark(); // Output: Woof! Woof!
```

In the above example, we have a `Animal` and `Dog` class. The `Dog` class extends the `Animal` class using the `extends` keyword. This means that the `Dog` class inherits the `getName` method from the `Animal` class. Additionally, `Dog` class also has a `bark` method which is unique to the `Dog` class.

We create an instance of the `Dog` class and set the name of the dog to "Buddy". We can then call the `getName` method, which is inherited from the `Animal` class, to get the name of the dog. We can also call the `bark` method, which is unique to the `Dog` class.

This is a simple example of how inheritance can be used in TypeScript. By using inheritance, we can reuse code from a superclass and extend it to create new functionality in a subclass.