To import a library in Scala, you can use the `import` keyword followed by the fully qualified name of the library or class. Here are a few examples:

```scala
// Importing the java.util package
import java.util._

// Importing a specific class from the java.util package
import java.util.ArrayList

// Importing a specific object from a package object
import scala.math._
```

In the first example, we import all the classes and sub-packages in the `java.util` package. In the second example, we only import the `ArrayList` class from the `java.util` package. In the third example, we import a specific object, `math`, which is defined in a package object in the `scala.math` package.

Note that you can also use renaming and hiding to control name conflicts and limit the scope of imported symbols:

```scala
// Renaming an imported class to avoid name conflicts
import java.util.{ArrayList => JArrayList}

// Hiding an imported class to limit the scope of symbols
import java.util.{HashSet => _, _}
```

In the first example, we rename the imported `ArrayList` class to `JArrayList` to avoid name conflicts. In the second example, we hide the `HashSet` class from the import and import all the other classes and sub-packages in the `java.util` package.