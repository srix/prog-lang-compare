In Scala, we can import other files or modules using the `import` keyword. Here are some examples:

1. Importing a single object or class:

```scala
import com.example.MyClass
```

This imports the `MyClass` object from the `com.example` package.

2. Importing multiple objects/classes:

```scala
import com.example.{MyClass1, MyClass2}
```

This imports the `MyClass1` and `MyClass2` objects/classes from the `com.example` package.

3. Importing all objects/classes in a package:

```scala
import com.example._
```

This imports all objects/classes in the `com.example` package.

4. Importing an object/class using an alias:

```scala
import com.example.{MyClass => Alias}
```

This imports the `MyClass` object from the `com.example` package, but gives it an alias of `Alias`.

5. Importing an object/class and its members:

```scala
import com.example.MyClass._
```

This imports all members of the `MyClass` object from the `com.example` package.

6. Importing a package object:

```scala
import com.example.package._
```

This imports the package object for the `com.example` package. The package object is defined in a special file called `package.scala`.

Note: It's important to understand that importing files or modules can increase the size and complexity of your project, so it's best to only import what you need.