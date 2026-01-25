In C#, a class is a blueprint or a template for creating objects. Here is an example of how to declare a class in C#:

```
public class Animal
{
    public string name;
    public int age;

    public void Speak()
    {
        Console.WriteLine("My name is " + name + " and I am " + age + " years old.");
    }
}
```

In this example, we have created a class called "Animal" that has two public properties: "name" (a string) and "age" (an integer). We have also defined a public method called "Speak()" that simply outputs information about the animal to the console.

To create an object from this class, we would use the following code:

```
Animal myAnimal = new Animal();
myAnimal.name = "Fluffy";
myAnimal.age = 5;
myAnimal.Speak();
```

This would create a new instance of the "Animal" class, set the "name" and "age" properties, and call the "Speak()" method to output information about the animal to the console.