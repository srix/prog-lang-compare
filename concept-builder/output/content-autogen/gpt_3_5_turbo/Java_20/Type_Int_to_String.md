In Java, we can convert an integer to a string using the Integer class's toString() method or by concatenating an empty string with the integer value. Here are some examples:

Using Integer.toString():

```
int num = 20;
String strNum = Integer.toString(num);
System.out.println(strNum); // Output: "20"
```

By concatenating an empty string:

```
int num = 20;
String strNum = "" + num;
System.out.println(strNum); // Output: "20"
```

We can also use String.format() method to format the integer as a string:

```
int num = 20;
String strNum = String.format("%d", num);
System.out.println(strNum); // Output: "20"
```

Note that when concatenating an integer with a string, the integer is automatically converted to a string. However, it's usually better to use the Integer.toString() method or the String.format() method to explicitly convert the integer to a string.