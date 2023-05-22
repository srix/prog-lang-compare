To import another file in Groovy, you can use the `import` keyword followed by the package and class name. Here's an example:

Assume there's a file called `myPackage.MyClass.groovy` that contains a class called `MyClass` in the `myPackage` package. If you want to use this class in another file, you would use the following import statement at the top of the file:

```
import myPackage.MyClass
```

Now you can create an instance of `MyClass` in your code and use it:

```
def myInstance = new MyClass()
```

If there are multiple classes in the same package that you want to import, you can use the asterisk wildcard operator like so:

```
import myPackage.*
```

This will import all classes in the `myPackage` package, and you can use them in your code as needed.

It is also possible to import static methods or classes in a similar way using the `static` keyword. Here's an example:

```
import static java.lang.Math.PI

def circleArea = radius * radius * PI
```

This imports the `PI` constant from the `java.lang.Math` class and allows you to use it directly in your code without having to qualify it with the class name.