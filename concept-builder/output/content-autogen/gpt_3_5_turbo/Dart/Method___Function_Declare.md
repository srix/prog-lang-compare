In Dart, a method or function can be declared using the `function` keyword followed by the function name. Here are a few examples:

```
// Function with no parameters and no return type
void greet() {
  print("Hello, world!");
}

// Function with parameters and return type
int add(int a, int b) {
  return a + b;
}

// Optional parameters
void optionalParameter(String name, [int age]) {
  age ??= 18; // Default value if age is not provided
  print("Name: $name, Age: $age");
}

// Named parameters
void namedParameter({String name, int age}) {
  age ??= 18; // Default value if age is not provided
  print("Name: $name, Age: $age");
}
```

The `void` keyword is used when a function doesn't return any value. The `return` statement is used to return a value from a function of a specific type.

The `optionalParameter` function accepts one required parameter `name` and an optional parameter `age`. If `age` is not provided, it is assigned the default value of 18.

The `namedParameter` function accepts two named parameters `name` and `age`. These parameters can be called in any order while invoking the function. If `age` is not provided, it is assigned the default value of 18.