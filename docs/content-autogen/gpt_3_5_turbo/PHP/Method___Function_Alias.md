In PHP, an alias is a way of creating a shorthand reference to a longer or more complex function name, class name, or namespace. It simplifies the code and makes it easier to read. 

Here are some examples:

1. Alias for a function: 

```
// Here we have a long function name
function really_long_function_name($arg1, $arg2) {
  // ...
}

// We can create a shorter alias for it using the "use" statement
use function really_long_function_name as short_func;

// Now we can use it like this
short_func($arg1, $arg2);
```

2. Alias for a class:

```
// Here we have a long class name
class ReallyLongClassName {
  // ...
}

// We can create a shorter alias for it using the "use" statement
use ReallyLongClassName as ShortClassName;

// Now we can use it like this
$obj = new ShortClassName();
$obj->some_method();
```

3. Alias for a namespace:

```
// Here we have a long namespace
namespace Really\Long\Namespace;

// We can create a shorter alias for it using the "use" statement
use Really\Long\Namespace as RLN;

// Now we can use it like this
$obj = new RLN\SomeClass();
$obj->some_method();
``` 

In all three cases, the new alias provides a way to reference the original function, class, or namespace with a shorter and easier-to-remember name.