In Swift, a hash is created using the `Hashable` protocol which requires the implementation of a `hashValue` property. Here is an example of creating a simple `Person` struct and implementing the `Hashable` protocol:

```swift
struct Person: Hashable {
    var name: String
    var age: Int

    func hash(into hasher: inout Hasher) {
        hasher.combine(name)
        hasher.combine(age)
    }
}
```

In the above example, the `Person` struct has two properties `name` and `age`. The `Hashable` protocol is implemented by defining a `hash(into:)` method that accepts a Hasher object and combines it with the properties using the `combine` method of the `Hasher` object.

Here is an example of how you can create a hash using the `Person` struct:

```swift
let person = Person(name: "John", age: 30)
let hashValue = person.hashValue
print(hashValue) //Output: 4749090083845659664
```

In this example, a `Person` object is created with name "John" and age 30. The `hash(into:)` method is called on the `Person` object to generate a hash value which is then printed to the console.

Additionally, you can also create a hash with a `Dictionary`. Here is an example:

```swift
var persons: [Person: String] = [:]
persons[Person(name: "John", age: 30)] = "Engineer"
persons[Person(name: "Jane", age: 28)] = "Doctor"

print(persons) //Output: [Person(name: "John", age: 30): "Engineer", Person(name: "Jane", age: 28): "Doctor"]
```

In this example, a dictionary is created with keys as `Person` objects and values as `String`s. Two `Person` objects are added to the dictionary along with their corresponding values. The `hashValue` property of the `Person` objects is used to uniquely identify them in the dictionary.