In Swift, you can use the `responds(to:)` method for any object to check if it has a method. Here's an example:

```swift
class MyClass {
    func myFunction() {
        print("Hello, world!")
    }
}

let obj = MyClass()

if obj.responds(to: #selector(MyClass.myFunction)) {
    obj.myFunction() // will print "Hello, world!"
} else {
    print("obj does not respond to myFunction")
}
```

In this example, we create a class `MyClass` with a method `myFunction`. Then we create an instance `obj` of that class. Using the `responds(to:)` method, we check if `obj` responds to the `myFunction` selector. If it does, we call the method on the object. If it doesn't, we print a message indicating that the method doesn't exist for the object.