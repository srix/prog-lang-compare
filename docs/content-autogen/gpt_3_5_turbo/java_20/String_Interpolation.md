In Java, we can interpolate strings using the `String.format()` method or using the newer `String interpolation` feature introduced in Java 15, which uses the `$` symbol.

Here are some examples:

Using String.format():

```
int age = 20;
String name = "John";
String message = String.format("My name is %s and I am %d years old.", name, age);
System.out.println(message);
// Output: My name is John and I am 20 years old.
```

Using String interpolation:

```
int age = 20;
String name = "John";
String message = `My name is ${name} and I am ${age} years old.`;
System.out.println(message);
// Output: My name is John and I am 20 years old.
```

Note that in the second example, we use backticks/backquote (`) instead of double-quotes (") to enclose the string and `$` symbols to interpolate the variables inside the string. This feature was introduced in Java 15 and above.