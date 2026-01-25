In C#, there are several ways to remove parts of a string. Here are three examples:

1. Using the Substring() method: This method returns a substring from the given string, starting at the specified index and counting a certain number of characters.

```
string originalString = "Hello World!";
string newString = originalString.Substring(6); // Returns "World!"
```

In the example above, the Substring() method is used to remove the first six characters from the original string, leaving only "World!".

2. Using the Remove() method: This method removes a specified number of characters starting at the specified position.

```
string originalString = "Hello World!";
string newString = originalString.Remove(6, 1); // Returns "Helloorld!"
```

In the example above, the Remove() method is used to remove one character from the original string, starting at the 6th position.

3. Using string manipulation: You can manually manipulate a string to remove parts of it by using methods such as Replace() and Trim().

```
string originalString = " Hello World! ";
string newString = originalString.Replace("World", ""); // Returns " Hello !"
```

In the example above, the Replace() method is used to find the word "World" in the original string and replace it with an empty string. This effectively removes "World" from the string.

Note: All of these methods return a new string object with the modified value. They do not modify the original string.