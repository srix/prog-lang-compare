In Java, you can compare strings using the `equals()` method or the `compareTo()` method. Here are some examples:

1. Using the `equals()` method:

```
String str1 = "Hello";
String str2 = "World";
String str3 = "Hello";

if (str1.equals(str2)) {
   System.out.println("str1 and str2 are equal");
} else {
   System.out.println("str1 and str2 are not equal");
}

if (str1.equals(str3)) {
   System.out.println("str1 and str3 are equal");
} else {
   System.out.println("str1 and str3 are not equal");
}
```

Output:
```
str1 and str2 are not equal
str1 and str3 are equal
```

2. Using the `compareTo()` method:

```
String str1 = "apple";
String str2 = "banana";
String str3 = "apple";

int result1 = str1.compareTo(str2);
int result2 = str1.compareTo(str3);

if (result1 < 0) {
   System.out.println("str1 comes before str2");
} else if (result1 > 0) {
   System.out.println("str2 comes before str1");
} else {
   System.out.println("str1 and str2 are equal");
}

if (result2 < 0) {
   System.out.println("str1 comes before str3");
} else if (result2 > 0) {
   System.out.println("str3 comes before str1");
} else {
   System.out.println("str1 and str3 are equal");
}
```

Output:
```
str1 comes before str2
str1 and str3 are equal
```

In the above example, the `compareTo()` method returns an integer value that represents the difference between the two strings. If the result is negative, the first string comes before the second string. If the result is positive, the second string comes before the first string. And if the result is zero, the two strings are equal.