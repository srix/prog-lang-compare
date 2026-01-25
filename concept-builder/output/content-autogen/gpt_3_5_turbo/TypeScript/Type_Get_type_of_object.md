In TypeScript, you can determine the type of an object using the `typeof` and `instanceof` operators. 

The `typeof` operator returns a string representation of the type of an object or variable. 

Here is an example:

```typescript
let name: string = "John";
let age: number = 28;
let isStudent: boolean = true;

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
```

The `instanceof` operator is used to check whether an object is an instance of a particular class or interface. 

Here is an example:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let john = new Person("John", 28);
console.log(john instanceof Person); // true

let obj = { x: 1, y: 2 };
console.log(obj instanceof Person); // false
```

In the above example, `john` is an instance of the `Person` class, so the `instanceof` operator returns `true`. `obj` is not an instance of the `Person` class, so `false` is returned.