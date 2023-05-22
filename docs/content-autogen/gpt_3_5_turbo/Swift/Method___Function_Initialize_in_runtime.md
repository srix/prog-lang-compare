In Swift, one way to initialize a function or method at runtime is by using closures or anonymous functions. 

Here's an example:

```Swift
let myClosure = { (a: Int, b: Int) -> Int in
    return a + b
}

let result = myClosure(2, 3)
print(result) // Output: 5
```

In this example, we first define a closure `myClosure` that takes two integers `a` and `b` and returns their sum. We then pass arguments `2` and `3` to this closure and the result is printed as `5`.

Another way to initialize a function at runtime is by using the `Selector` class. Here's an example:

```Swift
class MyClass {
    @objc func myMethod() {
        print("My method was called.")
    }
}

let myObject = MyClass()
let mySelector = #selector(MyClass.myMethod)

myObject.perform(mySelector) // Output: "My method was called."
```

In this example, we first define a class `MyClass` that has a method `myMethod`. We then create an object of this class and get a reference to the selector of the `myMethod` method using the `#selector` syntax. Finally, we call the `perform` method on the `myObject` instance with the `mySelector` argument which will call the `myMethod` method of the `MyClass` class and the output will be "My method was called."