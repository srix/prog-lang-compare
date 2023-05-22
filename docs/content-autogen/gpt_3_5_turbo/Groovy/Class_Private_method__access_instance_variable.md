In Groovy, accessing an instance variable in a private method can be tricky as private methods are not directly accessible from outside the class. Here's an example to illustrate it.

```
class MyClass {
    private String myPrivateVar = "Hello, World!"

    private void myPrivateMethod() {
        println("Value of myPrivateVar: ${myPrivateVar}")
    }

    void myPublicMethod() {
        myPrivateMethod()
    }
}

def obj = new MyClass()
obj.myPublicMethod()
```

In this example, we have a class `MyClass` with a private instance variable `myPrivateVar` and a private method `myPrivateMethod()`. We also have a public method `myPublicMethod()` that calls the `myPrivateMethod()`. 

To access the `myPrivateVar` from the `myPrivateMethod()`, we simply need to use `this` keyword to access it. Here's an updated version of the code:

```
class MyClass {
    private String myPrivateVar = "Hello, World!"

    private void myPrivateMethod() {
        println("Value of myPrivateVar: ${this.myPrivateVar}")
    }

    void myPublicMethod() {
        myPrivateMethod()
    }
}

def obj = new MyClass()
obj.myPublicMethod()
```

In this example, we use `this.myPrivateVar` to access the private instance variable `myPrivateVar` inside the private method `myPrivateMethod()`. When we run the `myPublicMethod()`, it will print `Value of myPrivateVar: Hello, World!`.