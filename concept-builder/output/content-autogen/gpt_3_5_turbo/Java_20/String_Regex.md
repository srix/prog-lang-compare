Regex (Regular expressions) in Java are used to match and manipulate strings. The java.util.regex package contains classes for text searching and manipulation using regular expressions. Here is an example of how to use regex in Java 20:

1. Checking if a String matches a regular expression:
We can use the matches() method to check if a string matches a regular expression. For example, let's say we want to check if a string contains only letters and whitespace characters:

```
String regex = "^[a-zA-Z\\s]+$"; // this regular expression matches only letters and whitespace characters
String str = "Hello World";
boolean isMatch = str.matches(regex);
System.out.println(isMatch); // output: true
```

2. Replacing a pattern in a String:
We can use the replaceAll() method to replace a pattern in a string with another string. For example, let's say we want to replace all occurrences of the word "Java" with "Python" in a string:

```
String regex = "Java";
String str = "I love Java programming. Java is awesome!";
String replacedStr = str.replaceAll(regex, "Python");
System.out.println(replacedStr); // output: I love Python programming. Python is awesome!
```

3. Splitting a String using a regular expression:
We can use the split() method to split a string into an array of substrings using a regular expression as a separator. For example, let's say we want to split a string into an array of words:

```
String regex = "\\s+"; // this regular expression matches one or more whitespace characters
String str = "Hello World! How are you?";
String[] words = str.split(regex);
System.out.println(Arrays.toString(words)); // output: [Hello, World!, How, are, you?]
```

4. Extracting a pattern from a String:
We can use the Pattern class to compile a regular expression and extract a pattern from a string. For example, let's say we want to extract all occurrences of the word "Java" from a string:

```
String regex = "Java";
String str = "I love Java programming. Java is awesome!";
Pattern pattern = Pattern.compile(regex);
Matcher matcher = pattern.matcher(str);
while (matcher.find()) {
    System.out.println("Found at index " + matcher.start() + " to " + matcher.end());
}
// output: Found at index 7 to 11
//         Found at index 29 to 33
```

These are just a few examples of how to use regex in Java. With regular expressions, there are endless possibilities for string manipulation and pattern matching.