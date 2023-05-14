In Java, you can concatenate two or more strings using the concatenation operator (+), StringBuilder or StringBuffer class.

Here are three ways of concatenating strings in Java 20 with examples:

1. Using the concatenation operator

```
//Method 1
String str1 = "Java";
String str2 = "20";
String result = str1 + str2;

System.out.println(result); //Output: Java20
```

2. Using StringBuilder class

```
//Method 2
StringBuilder builder = new StringBuilder();
builder.append("Java");
builder.append("20");

String result = builder.toString();
System.out.println(result); //Output: Java20
```

3. Using StringBuffer class

```
//Method 3
StringBuffer buffer = new StringBuffer();
buffer.append("Java");
buffer.append("20");

String result = buffer.toString();
System.out.println(result); //Output: Java20
```

All three methods will produce the concatenated string "Java20". However, using the StringBuilder or StringBuffer class is a better option if you need to concatenate multiple strings because they are mutable and allow you to modify the string without creating a new object every time.