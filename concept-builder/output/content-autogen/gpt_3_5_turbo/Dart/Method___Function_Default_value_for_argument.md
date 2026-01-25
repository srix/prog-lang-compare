In Dart, we can set default values for function or method arguments. The default value is used in case the argument is not passed during the function call. 

Here is an example of a function with one argument and a default value in Dart:

```
void greet(String name, {String message = 'Hello'}) {
  print('$message $name');
}
```

In the above code, the `greet` function takes one required argument `name` of type `String` and one optional named argument `message` of type `String`. The `message` argument has a default value of `'Hello'`.

You can call this function with or without the `message` argument:

```
greet('John'); // prints "Hello John"
greet('Mary', message: 'Hi'); // prints "Hi Mary"
```

In the first example, only the required argument `name` is passed, so the default value of `message` ('Hello') is used. In the second example, both `name` and `message` are passed and the value of `message` is assigned to 'Hi', so 'Hi Mary' is printed.

We can also set default values for positional arguments:

```
void showMessage(String name, [String message = 'Welcome']) {
  print('$name, $message');
}
```

In the above code, the `showMessage` function takes one required positional argument `name`, and one optional positional argument `message`. The `message` argument has a default value of `'Welcome'`.

You can call the function with or without the `message` argument:

```
showMessage('John'); // prints "John, Welcome"
showMessage('Mary', 'Thanks for coming'); // prints "Mary, Thanks for coming"
```

In the first example, only the required argument `name` is passed, so the default value of `message` ('Welcome') is used. In the second example, both `name` and `message` are passed, and the value of `message` is assigned to 'Thanks for coming', so 'Mary, Thanks for coming' is printed.