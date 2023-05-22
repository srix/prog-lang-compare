In Groovy, we can declare a class using the `class` keyword followed by the class name. Here's an example:

```groovy
class Person {
  String name
  int age
  
  void sayHello() {
    println "Hello, my name is ${name} and I am ${age} years old."
  }
}
```

In this example, we've declared a class called `Person` with two properties: `name` (of type `String`) and `age` (of type `int`). We've also defined a method called `sayHello` which simply prints a message with the `name` and `age` properties.

We can create an object of this class using the `new` keyword, like this:

```groovy
def person = new Person(name: 'John', age: 30)
```

We can also access the properties and methods of the `Person` class using the dot notation, like this:

```groovy
person.name = 'Jane'
person.sayHello()
```

This will update the `name` property of `person` to `'Jane'` and call the `sayHello` method, which will print `"Hello, my name is Jane and I am 30 years old."`