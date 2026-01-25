Unfortunately, JavaScript (ECMAScript) does not have a built-in `struct` data type like other programming languages such as C++, Python, or Swift. However, we can create an object that behaves like a `struct` by following some conventions. Here’s an example:

```
const Person = {
  firstName: '',
  lastName: '',
  age: 0,
  email: '',
  social: {
    twitter: '',
    facebook: '',
    instagram: '',
  },
};
```

In this example, we are defining an object named `Person` that contains some properties such as `firstName`, `lastName`, `age`, `email`, and `social`. We could use this `Person` object to represent a contact in an address book application, where we need to store multiple pieces of information about each person.

To set values for these `Person` properties, we can assign them like this:

```
const john = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  social: {
    twitter: '@john_doe',
    facebook: '/john.doe',
    instagram: '/john_doe',
  },
};
```

Now, we can access the properties of the `john` object like this:

```
console.log(john.firstName); // Output: John
console.log(john.social.instagram); // Output: /john_doe
```

While this approach isn’t a true `struct`, it provides a similar way to define and organize related data in JavaScript. This style of programming is commonly referred to as `object-based` programming.