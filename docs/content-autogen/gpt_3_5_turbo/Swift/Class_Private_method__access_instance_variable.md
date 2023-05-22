In Swift, you can access instance variables in private methods by using the `self` keyword. Here's an example:

```
class MyClass {
    private var myProperty: Int = 0
    
    private func myPrivateMethod() {
        // Accessing instance variable in private method
        let myValue = self.myProperty
        print(myValue)
    }
}
```

In this example, the `MyClass` has a private instance variable `myProperty` and a private method `myPrivateMethod`. Inside the method, we can access the instance variable using `self.myProperty`. It's important to note that we have to use the `self` keyword because the method and the variable are both declared as private.