In Java, you can interpolate strings using the `String.format()` method or by using string interpolation with the `$` symbol.

Here are some examples to interpolate the string "20" in Java:

Using `String.format()` method:

```
int num = 20;
String str = String.format("The value of num is %d", num);
System.out.println(str);
```

Output: `The value of num is 20`

Using string interpolation with `$` symbol:

```
int num = 20;
String str = "The value of num is " + num;
System.out.println(str);
```

Output: `The value of num is 20`

You can also use the `${}` syntax to interpolate expressions within a string:

```
int num = 20;
String str = "The result of 2 * ${num} is " + (2 * num);
System.out.println(str);
```

Output: `The result of 2 * 20 is 40`

Note that string interpolation with `$` symbol and `${}` syntax is only available from Java 15 onwards.