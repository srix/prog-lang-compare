To declare a class in Scala, we use the `class` keyword followed by the name of the class, an optional constructor parameter list and the body of the class. Here's a simple example:

```
class Person(name: String, age: Int) {
  def greeting(): String = s"Hello, my name is $name and I'm $age years old."
}
```

In this example, we have declared a class named `Person` with two constructor parameters, `name` and `age`. We have also defined a method `greeting` that returns a string with a greeting including the person's name and age.

We can create an instance of this class as follows:

```
val person = new Person("John", 30)
println(person.greeting())
```

This will create a new instance of the `Person` class with the name `"John"` and age `30`, and print out the greeting using the `greeting` method of the `Person` class.

We can also add more methods to the class, as well as properties, and override and implement abstract methods. Here's an example of a `Rectangle` class:

```
class Rectangle(val width: Int, val height: Int) {

  def area(): Int = width * height

  def perimeter(): Int = 2 * (width + height)

  override def toString(): String = s"Rectangle($width, $height)"

}
```

In this example, we have used the `val` keyword to define `width` and `height` as properties of the class. We have also defined methods to calculate the area and perimeter of the rectangle, and overridden the `toString` method to return a string representation of the rectangle. We can create an instance of this class as follows:

```
val rectangle = new Rectangle(5, 10)
println(rectangle.area()) // 50
println(rectangle.perimeter()) // 30
println(rectangle.toString()) // Rectangle(5, 10)
```