In Dart, you can return a value from a method or function using the `return` keyword. The syntax for a method or function that returns a value is as follows:

```
return_type function_name(arguments) {
  // function body
  // return value;
}
```

Here, `return_type` is the data type of the value being returned, `function_name` is the name of the method or function, and `arguments` are the parameters that the method or function takes. 

For example, consider the following function that calculates the sum of two integers and returns the result:

```
int calculateSum(int x, int y) {
  int sum = x + y;
  return sum;
}
```

In this example, `int` is the return type of the method `calculateSum`. The method takes two arguments `x` and `y`, and calculates their sum and returns it using the `return` keyword. 

To call this method, you can do the following:

```
void main() {
  int result = calculateSum(5, 7);
  print(result);
}
```

In this example, 5 and 7 are passed as arguments to the `calculateSum` method, and the result of the method (i.e., the sum of 5 and 7) is stored in the `result` variable. Finally, the value of `result` is printed using the `print` statement.