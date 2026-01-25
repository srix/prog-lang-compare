To import libraries in Groovy, you can use the `import` keyword followed by the fully qualified name of the package or class. Here is an example of how to import the `java.util` package and use the `ArrayList` class:

```groovy
import java.util.ArrayList

def list = new ArrayList()
list.add("apple")
list.add("banana")
list.add("orange")

println(list)
```

In the above code block, the `import` statement is used to import the `java.util.ArrayList` class. The `def` keyword is used to define a variable `list`, which is then initialized with a new instance of `ArrayList`. The `add` method is used to add three elements to the list, and `println` is used to print the contents of the list.

You can also use the `*` wildcard character to import all classes in a package. Here is an example of how to import all classes in the `java.util` package:

```groovy
import java.util.*

def set = new HashSet()
set.add("dog")
set.add("cat")
set.add("bird")

println(set)
```

In the above code block, the `import` statement is used to import all classes in the `java.util` package with the `*` wildcard character. The `def` keyword is used to define a variable `set`, which is then initialized with a new instance of `HashSet`. The `add` method is used to add three elements to the set, and `println` is used to print the contents of the set.