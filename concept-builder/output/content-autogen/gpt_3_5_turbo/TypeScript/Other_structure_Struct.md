Sure, I'd be glad to help!

In TypeScript, `struct` is not a primitive type, but you can create a struct-like typed object using an interface or a class.

Using an interface, you can define the properties that the object should contain, their types, and whether they are optional or required. Here is an example of defining a `Person` struct using an interface:

```typescript
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}
```

This `Person` interface defines three properties: `name` of type `string`, `age` of type `number`, and `isStudent` of type `boolean`.

You can create an object of this type by providing the values for each property:

```typescript
const john: Person = {
  name: 'John',
  age: 25,
  isStudent: true,
};
```

Alternatively, you can define the `Person` struct using a class, which provides more advanced features, such as access modifiers and methods. Here is an example of using a class to define a `Person` struct:

```typescript
class Person {
  constructor(public name: string, public age: number, public isStudent: boolean) {}
}
```

This `Person` class defines a constructor that takes three arguments, and assigns them to public properties of the object.

You can create an object of this class using the `new` keyword:

```typescript
const john = new Person('John', 25, true);
```

I hope that helps! Let me know if you have any questions.