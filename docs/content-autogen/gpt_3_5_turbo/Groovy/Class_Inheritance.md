Inheritance is a concept in object-oriented programming where a subclass can inherit attributes and methods from its parent class. In Groovy, this can be achieved using the `extends` keyword.

Let's take an example to understand how to use inheritance in Groovy:

```
class Animal {
    String name
    int age

    void speak() {
        println "I am an animal."
    }

    void setNameAge(String name, int age) {
        this.name = name
        this.age = age
    }
}

class Dog extends Animal {
    void speak() {
        println "I am a dog. My name is ${name} and I am ${age} years old."
    }

    void wagTail() {
        println "${name} is wagging its tail."
    }
}

def dog = new Dog()
dog.setNameAge("Max", 3)
dog.speak() // Output: "I am a dog. My name is Max and I am 3 years old."
dog.wagTail() // Output: "Max is wagging its tail."
```

In the above example, we have a parent class `Animal` with attributes `name` and `age`, and a method `speak` which prints "I am an animal." The child class `Dog` extends the `Animal` class using the `extends` keyword.

The `Dog` class overrides the `speak` method of the `Animal` class to print "I am a dog. My name is {name} and I am {age} years old."

We can then create an instance of the `Dog` class and call the `setNameAge`, `speak`, and `wagTail` methods to set the name and age of the dog and print its details and wag its tail.

So, inheritance allows us to create subclasses that can reuse, extend, and modify the attributes and methods of its parent class, making our code more efficient and organized.