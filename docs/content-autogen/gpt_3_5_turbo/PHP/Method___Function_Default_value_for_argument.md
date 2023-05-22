In PHP, default values can be set for function or method arguments. If an argument has a default value, then it becomes optional, which means that if the caller doesn't pass a value for that argument, the default value will be used. Here's an example of how to use default values for arguments in PHP:

```
function greet($name = "friend") {
  echo "Hello, $name!";
}

// Calling the function without passing any arguments
greet(); // Output: Hello, friend!

// Calling the function with an argument
greet("John"); // Output: Hello, John!
```

In the above example, the `greet()` function has one argument named `$name`. By default, its value is set to `"friend"`. When the function is called without passing any arguments, the default value is used. When the function is called with an argument, the passed value is used instead of the default value.

Note that if a default value is set for an argument, it must be the last argument in the function declaration. For example, the following function declaration will result in a parse error:

```
function greet($name = "friend", $age) {
  // Function body
}
```