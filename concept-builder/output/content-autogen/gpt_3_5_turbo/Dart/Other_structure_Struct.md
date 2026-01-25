In Dart, a struct is defined using the `struct` keyword. A struct is a collection of related items, called fields that can contain different types of data. Structs are used to group related data together, and they provide a way to represent complex structures in code. The struct is immutable, which means that once a struct object is created, its properties cannot be changed.

Here's an example of how to create a struct in Dart:

```
struct User {
  final String name;
  final int age;
  final String email;

  User(this.name, this.age, this.email);
}
```

In this example, we define a `User` struct with three fields: `name`, `age`, and `email`. The struct is defined as `final`, which means once created, its values cannot be changed.

To create an instance of the `User` struct, we can use the following code:

```
var user = User("John", 30, "john@gmail.com");
```

We can access the values of the struct using the dot notation:

```
print(user.name);     // Output: John
print(user.age);      // Output: 30
print(user.email);    // Output: john@gmail.com
```

We can use structs to group related data, which may help promote readability and modularity in our code.