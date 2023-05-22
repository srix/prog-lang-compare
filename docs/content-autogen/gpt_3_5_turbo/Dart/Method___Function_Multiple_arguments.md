In Dart, we can use multiple arguments in a method or function by specifying the parameter type followed by the parameter name, with each parameter separated by a comma. Here's an example:

```
void printDetails(String name, int age, double weight) {
  print("Name: $name");
  print("Age: $age");
  print("Weight: $weight");
}
```

In this example, we have defined a function called `printDetails` that takes three parameters: a `String` called `name`, an `int` called `age`, and a `double` called `weight`. The function simply prints out these values.

To call this function, we could do something like this:

```
printDetails("John", 30, 75.5);
```

This would output:

```
Name: John
Age: 30
Weight: 75.5
```

We can also use named arguments in Dart to make it easier to pass in arguments in a different order. Here is an example:

```
void printDetails({String name, int age, double weight}) {
  print("Name: $name");
  print("Age: $age");
  print("Weight: $weight");
}
```

In this example, we are using named arguments. This means that we can call the function and pass in the arguments in any order like this:

```
printDetails(age: 30, weight: 75.5, name: "John");
```

This will output the same result as before:

```
Name: John
Age: 30
Weight: 75.5
```

So in summary, we can use multiple arguments in functions or methods in Dart by specifying the parameter types and names, separated by commas. We can also use named arguments to make it easier to pass in arguments in a different order.