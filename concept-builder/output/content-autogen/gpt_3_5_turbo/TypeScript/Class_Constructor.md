In TypeScript, a constructor is a special method that is called when an object is created. It is used to initialize the properties of an object. Constructors are defined using the `constructor` keyword and are declared inside a class. 

Here is an example of how to use constructor in TypeScript:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // other methods 
}

const person1 = new Person("John Doe", 30);
console.log(person1.name); // output: John Doe
console.log(person1.age); // output: 30
```

In this example, we have created a class `Person` with two properties, `name` and `age`. We have defined the constructor of the class with two parameters `name` and `age`, which are used to initialize the `name` and `age` properties of the object. 

When we create a new instance of the `Person` class using the `new` keyword and passing the required arguments to the constructor, the object is created with the `name` and `age` properties set as per the provided arguments. 

We can define other methods inside the `Person` class as well, and the constructor can be used to initialize any other properties that the class has.