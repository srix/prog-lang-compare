Inheritance is a process of creating new classes from existing ones. With inheritance, a new class can access all the properties and behavior of its parent class. In Ruby, we can use the keyword `class` to create a new class, and the keyword `super` to call the constructor of the parent class.

Here is an example of using inheritance in Ruby:

```
class Animal
  def eat
    puts "The animal is eating."
  end
end

class Dog < Animal
  def bark
    puts "Woof woof!"
  end
end

class Cat < Animal
  def meow
    puts "Meow meow!"
  end
end
```

In the example above, `Animal` is the parent class, and `Dog` and `Cat` are child classes that inherit from it. `Dog` and `Cat` have their own specific behaviors and properties, such as `bark` and `meow`, but they also have access to the `eat` method defined in `Animal`.

We can create instances of the child classes and call their methods like this:

```
dog = Dog.new
dog.bark
dog.eat

cat = Cat.new
cat.meow
cat.eat
```

The `dog` instance can bark and eat, and the `cat` instance can meow and eat, thanks to inheritance.