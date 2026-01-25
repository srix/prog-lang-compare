Sure, here's how to declare a method or function in Java 20 with examples:

Method Declaration Format:
```java
<access modifier> <static/non-static> <return type> methodName(parameterList) {
   // method body
}
```

Here is an example of a function that calculates the sum of two integers:

```java
public static int addNumbers(int a, int b) {
    int sum = a + b;
    return sum;
}
```

In this example, the method is named `addNumbers`, has an access modifier of `public`, a static/non-static keyword of `static`, a return type of `int`, and takes two integer parameters (`a` and `b`).

The method body consists of a single statement that adds the two parameters together and assigns the result to a local variable called `sum`. Finally, it returns the value of `sum` using the `return` keyword.

Here is another example of a method that outputs the square of a number:

```java
public static void printSquare(int n) {
    System.out.println("The square of " + n + " is " + (n * n));
}
```

In this example, the method is named `printSquare`, has an access modifier of `public`, a static/non-static keyword of `static`, a return type of `void` (meaning it does not return a value), and takes a single integer parameter (`n`).

The method body consists of a single statement that prints a string to the console using `System.out.println()`. The string includes the original value of `n` and the square of `n`. There is no `return` statement, as the method does not return a value.

I hope that helps!