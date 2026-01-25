In TypeScript, we can use get/set to define a property in the class. This property can be accessed using a getter and a setter function.

Here's an example:

```typescript
class Person {
  private _age: number;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      console.error('Age can not be negative');
    } else {
      this._age = value;
    }
  }
}

const john = new Person();
john.age = -10; // outputs 'Age can not be negative' to console
john.age = 20; // sets john's age to 20
console.log(john.age); // logs 20 to console
```

In the example above, we have defined a private property `_age` and a public property `age` using get/set. When we set the value of `age`, it triggers the `set` function, which checks whether the value is negative or not. If it is negative, it outputs an error message to the console. If not, it sets the value of `_age`. When we get the value of `age`, it triggers the `get` function, which simply returns the value of `_age`.