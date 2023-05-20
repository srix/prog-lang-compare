In Java, `unless` is not a keyword or operator. It is not a built-in conditional statement. However, you can achieve the functionality of the `unless` clause by inverting the conditional expression using the `not` operator `!`. 

Here is an example of using `unless` clause in a conditional statement:

```
int x = 10;

// unless x is equal to 5, print "x is not equal to 5"
if (x != 5) {
    System.out.println("x is not equal to 5");
}
```

This code will print "x is not equal to 5" because the conditional statement evaluates to true since `x` is not equal to 5.

Alternatively, you can use the `else` clause to achieve the same functionality:

```
int x = 10;

// if x is not equal to 5, print "x is not equal to 5". Otherwise, print "x is equal to 5".
if (x != 5) {
    System.out.println("x is not equal to 5");
} else {
    System.out.println("x is equal to 5");
}
```

This code will also print "x is not equal to 5" since `x` is not equal to 5.

In summary, `unless` is not a keyword or operator in Java. Instead, you can use the `not` operator `!` to invert the conditional expression, or use the `else` clause to achieve the functionality of the `unless` clause.