In Java, we can concatenate two or more strings using the + operator or the concat() method. Here are some examples:

1. Using the + operator:

```
String str1 = "Hello";
String str2 = "world";
String result = str1 + " " + str2; // concatenate using the + operator
System.out.println(result); // Output: "Hello world"
```

2. Using the concat() method:

```
String str1 = "Java";
String str2 = "Programming";
String result = str1.concat(" ").concat(str2); // concatenate using the concat() method
System.out.println(result); // Output: "Java Programming"
```

3. Concatenating strings using loops:

```
String[] arr = {"Hello", "world", "Java"};
String result = "";
for (String str : arr) {
    result += str + " "; // concatenate using the + operator
}
System.out.println(result.trim()); // Output: "Hello world Java"
```

Note that we use the trim() method to remove the extra space at the end of the string.