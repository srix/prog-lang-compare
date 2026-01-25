In Objective-C, a method or function can be declared using the following syntax:

```
- (return_type) method_name:(parameter_type) parameter_name;
```

Here, the '-' sign denotes an instance method, while a '+' sign represents a class method. The return_type is the data type that the method returns when it is executed. The method_name is a descriptive name that tells what the method does. The parameter_type is the data type of the parameter, and the parameter_name is a descriptive name for the parameter. Multiple parameters can be added with a comma.

For example, let's declare a method called "addNumbers" that takes two integers and returns their sum:

```
- (int) addNumbers:(int) num1 withNum2:(int) num2 {
   int sum = num1 + num2;
   return sum;
}
```

Here, the method takes two integer parameters named "num1" and "num2" respectively. It adds these two numbers and returns their sum.

Another example of declaring a function in objective-C is:

```
int square(int number) {
    int result = number * number;
    return result;
}
```

This is how to declare a simple function that takes an integer as its argument and computes its square. It returns an integer as a result.