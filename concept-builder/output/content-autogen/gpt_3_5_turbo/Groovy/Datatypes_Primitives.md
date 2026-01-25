In Groovy, primitive types are similar to those found in Java. They are used to represent basic data types such as numbers and characters. Groovy's primitive types include:

1. Integers (int): Used to represent integer values. Example - `int num = 10;`

2. Floating-point numbers (double): Used to represent decimal values. Example - `double pi = 3.14;`

3. Characters (char): Used to represent a single character. Example - `char letter = 'a';`

4. Booleans (boolean): Used to represent true or false values. Example - `boolean isTrue = true;`

Groovy also provides a shorthand notation to declare primitive types, where you can omit the data type and Groovy will automatically infer it based on the value assigned. For example:

```
def num = 10 // Groovy infers that 'num' is an integer
def pi = 3.14 // Groovy infers that 'pi' is a double
def letter = 'a' // Groovy infers that 'letter' is a char
def isTrue = true // Groovy infers that 'isTrue' is a boolean
```

It is important to note that unlike Java, Groovy's primitive types are actually implemented as objects, which means that they can have methods attached to them. For example:

```
int num = 10
assert num.toString() == '10'
assert num.class == Integer
``` 

This gives Groovy additional functionalities when working with primitive types, such as the ability to call methods on them.