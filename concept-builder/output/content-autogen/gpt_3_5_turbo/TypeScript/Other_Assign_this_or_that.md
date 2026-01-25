In TypeScript, you can use the `this` keyword to refer to the current object, and the `that` keyword to refer to another object. 

Let's say you have two objects, `person1` and `person2`, and you want to assign the properties of `person1` to `person2`. Here's how you can do it using `that`:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  assignProperties(otherPerson: Person) {
    const that = this; // assign current object to `that`
    Object.keys(otherPerson).forEach(function(key) {
      that[key] = otherPerson[key]; // use `that` to assign property of `otherPerson` to `this`
    });
  }
}

const person1 = new Person("John", 25);
const person2 = new Person("", 0);

person2.assignProperties(person1);

console.log(person2.name); // output: John
console.log(person2.age); // output: 25
```

In the code above, the `assignProperties` method of the `Person` class takes in another `Person` object (`otherPerson`) and assigns its properties to the current object using `that`. 

You can also use `this` and `that` in other scenarios where you need to refer to different objects or scopes in your TypeScript code.