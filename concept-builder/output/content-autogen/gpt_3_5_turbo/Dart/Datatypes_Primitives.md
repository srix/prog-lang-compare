In Dart, primitive types are the basic building blocks for all other types. They represent basic values like numbers, strings, booleans, and null. Here are the primitive types in Dart with examples:

1. Numbers: 

Numbers can be of two types: integers and doubles. Integers are whole numbers, while doubles are fractional numbers. 

Examples of integers:

```
int age = 25; 
int count = 10;
```

Examples of doubles:

```
double price = 10.5;
double tax = 0.2;
```

2. Booleans:

Booleans represent true or false values.

Example:

```
bool isHuman = true;
bool isMobile = false;
```

3. Strings:

Strings are used to represent text.

Example:

```
String name = "Peter";
String message = "Hello, Dart!";
```

4. Null:

The null type represents absence of value. 

Example:

```
var x = null;
```

Note that Dart also supports type inference, which allows you to omit the type annotation when declaring variables. For example:

```
var age = 25;
var message = "Hello, Dart!";
var isHuman = true;
``` 

Here, Dart will automatically assign the appropriate types based on the values assigned to the variables.