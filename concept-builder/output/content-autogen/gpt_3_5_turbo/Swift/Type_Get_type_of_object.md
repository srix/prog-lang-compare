In Swift, the `type(of:)` method can be used to get the type of an object at runtime. 

Here's an example using a `String` object:

```
let myString = "Hello, world!"
print(type(of: myString)) // output will be: String
```

Similarly, here's an example using an `Int` object:

```
let myInt = 42
print(type(of: myInt)) // output will be: Int
```

Note that the `type(of:)` method returns the actual type of the object, not just its superclass or protocol type.