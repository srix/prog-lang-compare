In Scala, fields in a class can be used to store data and values that are specific to each object instance. These fields can be defined using either the `val` or `var` keyword, with `val` indicating an immutable field and `var` indicating a mutable field. 

The syntax for defining fields in a class is as follows (using `val` as an example):

```
class ExampleClass(val field1: String, var field2: Int) {
  // class definition and methods go here
}
```

This code defines a `ExampleClass` with two fields, `field1` and `field2`. `field1` is defined as an immutable `val` with a type of `String`, while `field2` is defined as a mutable `var` with a type of `Int`. 

The values of these fields are set when an object of the class is instantiated:

```
val exampleObject = new ExampleClass("hello", 42)
```

Now `exampleObject` has a `field1` value of `"hello"` and a `field2` value of `42`. These values can be accessed and modified using dot notation:

```
println(exampleObject.field1)  // prints "hello"

exampleObject.field2 = 99
println(exampleObject.field2)  // prints 99
```

Note that `field1` and `field2` are both public by default, meaning they can be accessed and modified from anywhere outside of the class. To make a field private, you can use the `private` keyword:

```
class ExampleClass(private val sensitiveData: String) {
  // class definition and methods go here
}
```

In this case, `sensitiveData` can only be accessed and modified from within the `ExampleClass`.