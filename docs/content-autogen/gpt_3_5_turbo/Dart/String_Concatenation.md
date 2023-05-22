In Dart, you can concatenate strings by using the "+" operator. Here are a few examples:

```
// concatenating two strings
String str1 = "Hello";
String str2 = "World";
String result = str1 + " " + str2;
print(result); // Hello World
```

```
// concatenating multiple strings
String name = "John";
int age = 25;
String hobby = "playing football";
String result = "My name is " + name + ", I am " + age.toString() + " years old, and I enjoy " + hobby + ".";
print(result); // My name is John, I am 25 years old, and I enjoy playing football.
```

```
// using string interpolation to concatenate strings
String str1 = "Dart";
String str2 = "is fun";
String result = "$str1 $str2!";
print(result); // Dart is fun!
``` 

Note that you can also use the "concat" method to concatenate strings, but it may not be as efficient as using the "+" operator.