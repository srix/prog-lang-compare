Concatenation is the process of joining two or more strings together to form a single string. In Java, you can concatenate strings using the "+" or "+=" operators, or by using the concat() method. Here are some examples:

Using the "+" operator:
```java
String str1 = "Hello";
String str2 = "world";
String result = str1 + " " + str2; // Concatenates str1, a space, and str2
System.out.println(result); // Outputs "Hello world"
```

Using the "+=" operator:
```java
String str1 = "Hello";
str1 += " world"; // Concatenates " world" to the end of str1
System.out.println(str1); // Outputs "Hello world"
```

Using the concat() method:
```java
String str1 = "Hello";
String str2 = "world";
String result = str1.concat(" ").concat(str2); // Concatenates str1, a space, and str2
System.out.println(result); // Outputs "Hello world"
```
Note that in all cases, the resulting string is a new string object that is created and returned. The original strings are not modified.