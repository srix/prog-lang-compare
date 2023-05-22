In C#, a string is a sequence of characters. To create a string in C#, you can use either literal string syntax or string constructor syntax. Here are some examples:

1. Literal string syntax:
```
string name = "John";
```
In this example, the string "John" is assigned to a variable named "name" using the literal string syntax. 

2. String constructor syntax:
```
char[] chars = {'H', 'e', 'l', 'l', 'o'};
string greeting = new string(chars);
```
In this example, a character array is created containing the characters 'H', 'e', 'l', 'l', and 'o'. A new string is then created using the string constructor syntax that takes an array of characters as the argument.

3. Using string concatenation:
```
string first = "Hello";
string last = "World";
string message = first + " " + last;
```
In this example, two string variables named "first" and "last" are created, each containing a string. Then, a third variable named "message" is created by concatenating the two strings using the '+' operator and a space character.

4. Using string interpolation:
```
string name = "John";
int age = 25;
string message = $"My name is {name} and I am {age} years old.";
```
In this example, a string variable named "message" is created using string interpolation. The string contains placeholders enclosed in braces {} that will be replaced by the values of the variables specified outside the string. 

These are just a few examples of how to create a string in C#.There are several other ways to create strings, depending on your specific use case.