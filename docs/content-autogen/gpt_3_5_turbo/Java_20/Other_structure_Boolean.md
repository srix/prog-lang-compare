Boolean data is a primitive data type in Java which can have only two values: true or false. It is frequently used in programming to control the flow of code execution, as well as in logical expressions.

Here are some examples of using boolean data in Java:

1. Declaring a boolean variable:
```java
boolean flag = false;
```

2. Using boolean variables in if statements:
```java
boolean flag = true;
if (flag) {
    System.out.println("Flag is true");
} else {
    System.out.println("Flag is false");
}
```

3. Using boolean operators in logical expressions:
```java
boolean a = true;
boolean b = false;
if (a && b) {
    System.out.println("Both a and b are true");
} else if (a || b) {
    System.out.println("Either a or b is true");
} else {
    System.out.println("Neither a nor b is true");
}
```

4. Using boolean methods to return true or false:
```java
public static boolean isEven(int num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

int num = 10;
if (isEven(num)) {
    System.out.println(num + " is an even number");
} else {
    System.out.println(num + " is an odd number");
}
```

5. Using boolean values in loops:
```java
boolean flag = true;
int counter = 0;
while (flag) {
    System.out.println("The current count is: " + counter);
    counter++;
    if (counter == 5) {
        flag = false;
    }
}
```

These are just a few examples of how to use boolean data in Java. They can be used in a variety of scenarios to manipulate program flow and determine logical conditions.