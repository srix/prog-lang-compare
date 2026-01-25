In Scala, a private method can access instance variables directly without any additional syntax or steps. Here is an example:

```
class Person(val name: String, private var age: Int) {
  
  def greet() {
    println(s"Hello, my name is $name and I am $age years old.")
    age += 1 // can also modify the age variable since it is an instance variable
  }

  private def checkAge(): Boolean = {
    if (age >= 18) {
      println(s"$name is an adult.")
      true
    } else {
      println(s"$name is a minor.")
      false
    }
  }

  def isAdult(): Boolean = {
    checkAge() // calling the private method from a public method
  }
}
```

In this example, we have a `Person` class with a private `age` variable and a public `greet()` method that accesses `age` and modifies it. We also have a private `checkAge()` method that checks if the person is an adult or not. Finally, we have a public `isAdult()` method that calls the private `checkAge()` method.

As you can see, the private `checkAge()` method can access the private `age` variable directly without any issues. This is because private members can be accessed by any method within the same class, including other private methods.