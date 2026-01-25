In Java, a method or function can return a value using the `return` statement. The return statement is followed by the value that is to be returned. The value should be of the same data type as the return type specified in the method or function signature.

Here is an example of a method that returns an integer value:

```java
public static int square(int num) {
    int result = num * num;
    return result;
}
```

In the above example, the method `square()` takes an integer argument `num` and returns the square of `num`. The data type of the return value is an integer which is specified in the method signature. Inside the method, the square of `num` is calculated and stored in a variable `result`. Finally, the `return` statement is used to return the value of `result`.

Here's how you can call the above method:

```java
int x = 5;
int y = square(x);
System.out.println("The square of " + x + " is " + y);
```

The output of the above code is:

```
The square of 5 is 25
```

Another example of a method that returns a value:

```java
public static boolean isEven(int num) {
    boolean result = false;
    if(num % 2 == 0) {
        result = true;
    }
    return result;
}
```

In the above example, the method `isEven()` takes an integer argument `num` and returns a boolean value indicating whether the number is even or not. Inside the method, a variable `result` is initialized to `false`. If the remainder of `num` divided by two is zero, then `result` is set to `true`. Finally, the `return` statement is used to return the value of `result`.

Here's how you can call the above method:

```java
int x = 6;
if(isEven(x)) {
    System.out.println(x + " is even");
} else {
    System.out.println(x + " is odd");
}
```

The output of the above code is:

```
6 is even
```