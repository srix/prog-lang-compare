In Scala, a mixin allows a class to inherit traits and methods from multiple sources. It's a way to provide class composition without inheritance. A mixin creates a new class by combining a class with a trait, which is a set of methods and fields.

Here is an example of using a mixin in Scala:

```
trait Swimming {
  def swim(): Unit = {
    println("I'm swimming!")
  }
}

class Animal

class Fish extends Animal with Swimming

val fish = new Fish()
fish.swim()
```

In this example, we define a trait `Swimming` that has a single method `swim()`. Then, we define a class `Animal` and a subclass `Fish` that extends `Animal` and mixes in `Swimming`. Finally, we create an instance of `Fish` and call its `swim()` method.

The output will be:

```
I'm swimming!
```

We can also mix in multiple traits:

```
trait Swimming {
  def swim(): Unit = {
    println("I'm swimming!")
  }
}

trait Flying {
  def fly(): Unit = {
    println("I'm flying!")
  }
}

class Animal

class Bird extends Animal with Flying with Swimming

val bird = new Bird()
bird.fly()
bird.swim()
```

In this example, we define two traits `Swimming` and `Flying`, each with a single method. Then, we define a class `Animal` and a subclass `Bird` that extends `Animal` and mixes in both `Swimming` and `Flying`. Finally, we create an instance of `Bird` and call both its `fly()` and `swim()` methods.

The output will be:

```
I'm flying!
I'm swimming!
```