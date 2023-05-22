In Groovy, you can use the `getClass()` method to get the type of an object. Here is an example:

```groovy
def myString = "Hello"
println myString.getClass() // prints "class java.lang.String"

def myInteger = 42
println myInteger.getClass() // prints "class java.lang.Integer"
```

You can also use the `instanceof` operator to check if an object is an instance of a particular class. Here is an example:

```groovy
def myObject = "Hello"
if (myObject instanceof String) {
    println "myObject is a String"
} else {
    println "myObject is not a String"
}
```

This would output "myObject is a String".