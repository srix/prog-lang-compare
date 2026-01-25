In Java, you can remove a part of a string in several ways. Here are some examples:

1. Using the substring() method:

The substring() method is used to extract a portion of a string. It takes two parameters, the start index and the end index. The start index is inclusive, while the end index is exclusive. To remove a part of a string, you can simply concatenate the substrings before and after the part you want to remove.

```java
String str = "Hello World";
String newStr = str.substring(0, 5) + str.substring(10); // remove "World"
System.out.println(newStr); // output: "Hello"
```

2. Using the replace() method:

The replace() method is used to replace all occurrences of a character or string with another character or string. To remove a part of a string, you can replace it with an empty string.

```java
String str = "Hello World";
String newStr = str.replace("World", ""); // remove "World"
System.out.println(newStr); // output: "Hello"
```

3. Using the StringBuilder class:

The StringBuilder class is used to create and manipulate strings efficiently. To remove a part of a string, you can use the delete() method to remove a range of characters.

```java
StringBuilder sb = new StringBuilder("Hello World");
sb.delete(5, 11); // remove "World"
System.out.println(sb); // output: "Hello"
```

Note: All of these methods return a new string or new StringBuilder object with the specified part removed. The original string or StringBuilder object remains unchanged.