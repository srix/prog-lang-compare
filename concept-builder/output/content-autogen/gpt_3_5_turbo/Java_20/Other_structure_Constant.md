Constants in Java are fixed values that cannot be changed during program execution. Here's how to use constants in Java:

1. Declaring a constant:

To declare a constant in Java, you should use the final keyword followed by the data type, name of the constant, and the value you want to assign to it. 

Example: 

```
final int MAX_VALUE = 100;
final double PI = 3.14159;
final String MESSAGE = "Welcome to my program!";
```

2. Using constant:

You can now use the constant anywhere in your code, and Java will treat it as a fixed value that cannot be changed.

Example: 

```
int number = 50;
if (number > MAX_VALUE) {
    System.out.println("The number is too high!");
}
else {
    System.out.println("The number is within the allowed range.");
}

double circumference = 2 * PI * radius;
System.out.println("The circumference is " + circumference);

System.out.println(MESSAGE);
```

In this example, we're testing if a number is greater than a maximum value, calculating the circumference of a circle, and printing out a welcome message. All of these involve constants that were declared earlier.

Overall, using constants in Java helps make your code more readable and maintainable as you can reuse these values throughout your code without worrying about possible changes to their values.