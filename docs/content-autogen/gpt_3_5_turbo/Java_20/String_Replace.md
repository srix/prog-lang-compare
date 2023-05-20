To replace a substring within a string in Java, you can use the `replace` or `replaceAll` methods from the `String` class. Here are some examples:

Example 1: Using `replace` method
```
String str = "I love Java programming";
String substr = "Java";
String newSubstr = "Python";
String newStr = str.replace(substr, newSubstr);
System.out.println(newStr);
```
Output: `I love Python programming`

In this example, we have used the `replace` method to replace the substring "Java" with "Python" in the original string "I love Java programming". The method returns a new string with the replacement. Note that the `replace` method replaces all occurrences of the substring.

Example 2: Using `replaceAll` method
```
String str = "I love Java programming";
String regex = "\\s+"; // regular expression to match one or more spaces
String newStr = str.replaceAll(regex, "-");
System.out.println(newStr);
```
Output: `I-love-Java-programming`

In this example, we have used the `replaceAll` method to replace all spaces in the original string "I love Java programming" with hyphens ("-"). Note that the `replaceAll` method takes a regular expression as the first argument to match the substring to be replaced. Since we want to replace all spaces, we have used the regular expression "\\s+" which matches one or more spaces.