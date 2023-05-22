In Swift, we can use the `get` and `set` keywords to define computed properties in a class. Computed properties are properties whose value is not stored, but rather computed each time it is accessed. 

Let's say we have a class called `Person` that has a property called `age`. We can define this property as a computed property using `get` and `set` as follows:

```
class Person {
   var _age: Int = 0 // underscore is used to indicate it is not meant to be accessed outside of the class
   
   var age: Int {
      get {
         return _age
      }
      set(newValue) {
         _age = newValue
      }
   }
}
```

When we create an instance of the `Person` class, we can set the value of the `age` property using the set method:

```
let person = Person()
person.age = 25 // This will call the set method
```

We can also get the value of the `age` property using the get method:

```
print(person.age) // This will call the get method and print 25
```

In the above example, we are using a private variable `_age` to store the actual value of the age property. When we set `person.age` to a new value, the `set` method is called and it sets the value of `_age`. Similarly, when we try to access the value of `person.age`, the `get` method is called, which returns the value of `_age`. 

Note that in the above example, we don't have to explicitly call the `get` and `set` methods - Swift automatically calls them when we access or set the `age` property.