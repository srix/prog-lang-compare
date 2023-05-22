To import libraries in Kotlin, you simply use the `import` keyword. You can import a whole package, a specific class or a function, and there are two ways to import it: either through the fully qualified name or through a wildcard import.

For example, let's say you want to use the Java Math library in your Kotlin code. Here's how you can import it:

```
import java.lang.Math
```

You can also use a wildcard import to import all classes within the Math package:

```
import java.lang.*
```

Here's an example of importing a class from another package:

```
import com.example.MyClass
```

And here's an example of importing a function from a package:

```
import kotlinx.coroutines.delay
```

Note that you can use aliases to import classes or functions with a different name:

```
import org.example.LongPackageName as ShortName
```

This can be helpful to avoid naming conflicts or to make the code more readable.

In summary, importing libraries in Kotlin is straightforward using the `import` keyword. You can import a whole package, a specific class or function, and use aliases to rename them if necessary.