In JavaScript - ECMAScript 2021, the `this` keyword is used to refer to the current object, whereas the `that` keyword is not a reserved keyword in JavaScript. However, you can still use other variables or object references to assign a value to `that`. 

Here's an example of how to use `this` keyword in a method of an object:

```
const person = {
  name: "John",
  age: 30,
  getDetails: function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};
person.getDetails(); // outputs "Name: John, Age: 30"
```

In the above example, the `getDetails` method uses `this` to refer to the `person` object, which is the current object.

Here's an example of how to assign a value to `that` using a variable:

```
const obj = {
  a: 1,
  b: 2,
  c: function() {
    const that = this;
    console.log(that.a + that.b);
  }
};
obj.c(); // outputs 3
```

In the above example, the `c` method assigns the value of `this` to a variable called `that`. The `c` method then uses `that` to refer to the current object and perform a calculation.

Alternatively, you could also assign `that` using a reference to the current object:

```
const obj = {
  a: 1,
  b: 2,
  c: function() {
    const that = obj;
    console.log(that.a + that.b);
  }
};
obj.c(); // outputs 3
```

In this example, the `c` method assigns the value of `obj` to the `that` variable, which refers to the current object. 

Note that assigning a reference to `this` directly to `that` may not work as intended, since `this` may change depending on how the function is called. Therefore, it's recommended to assign a reference to the current object instead.