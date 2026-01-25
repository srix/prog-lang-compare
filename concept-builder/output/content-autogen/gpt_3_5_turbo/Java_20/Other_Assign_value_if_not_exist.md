In Java, you can assign a value to a variable using an "if" statement to check if the variable already has a value. If the variable does not have a value, then you can assign a new value to it.

Here is an example:

```java
int x = 10;

if (x == 0) {
  x = 20;
}
```

In this example, the variable "x" is initialized with a value of 10. The "if" statement checks if "x" is equal to 0. Since "x" is not equal to 0, the code inside the "if" statement is not executed. Therefore, "x" retains its original value of 10.

Here is another example:

```java
String str = null;

if (str == null) {
  str = "Hello, World!";
}
```

In this example, the variable "str" is initialized with a value of null. The "if" statement checks if "str" is equal to null. Since "str" is equal to null, the code inside the "if" statement is executed. Therefore, "str" is assigned a new value of "Hello, World!".