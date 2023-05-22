In Groovy, you can check if a class has a particular method using the `respondsTo()` method or the `hasMethod()` method that takes in the name of the method as an argument.

Here's an example to demonstrate this:

```
class Person {
    def sayHello() {
        println("Hello, world!")
    }
}

def person = new Person()

println(person.respondsTo('sayHello')) // Output: true
println(person.hasMethod('sayHello')) // Output: true

println(person.respondsTo('sayHi')) // Output: false
println(person.hasMethod('sayHi')) // Output: false
```

In the example above, we define a `Person` class with a `sayHello()` method. Then, we create an instance of the `Person` class and use the `respondsTo()` and `hasMethod()` methods to check if it has the `sayHello()` and `sayHi()` methods.

We get `true` as output in the case of `sayHello()`, which indicates that the `Person` class has the `sayHello()` method. And, we get `false` as output in the case of `sayHi()`, which indicates that the `Person` class does not have the `sayHi()` method.