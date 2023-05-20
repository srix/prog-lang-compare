In Java 20, you can convert a string to an integer using the `Integer.parseInt()` method. Here's how to do it with some examples:

Example 1:

```
String myString = "42";
int myInt = Integer.parseInt(myString);
System.out.println(myInt);
```

Output: `42`

Example 2:

```
String myString = "123";
int myInt = Integer.parseInt(myString) + 7;
System.out.println(myInt);
```

Output: `130`

Example 3:

```
String myString = "Hello";
int myInt = Integer.parseInt(myString);
System.out.println(myInt);
```

Output: `NumberFormatException`, because "Hello" cannot be converted to an integer.