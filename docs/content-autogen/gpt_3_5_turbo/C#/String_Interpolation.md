In C#, string interpolation allows you to embed expressions into string literals. This makes it easier and more convenient to create formatted strings. The syntax for string interpolation is to start the string with a dollar sign ($) and wrap expressions in curly brackets ({}) within the string.

Here's an example of using string interpolation:

```
string name = "John";
int age = 30;

// Using string interpolation
string message = $"My name is {name} and I am {age} years old.";

Console.WriteLine(message);
```

In this example, we declare two variables `name` and `age` and then create a string `message` using string interpolation. The expressions `{name}` and `{age}` are embedded within the string using curly brackets, and their values are inserted at run time. The output of the program would be:

```
My name is John and I am 30 years old.
```

String interpolation can also be used with format specifiers to control the display of the expression. For example:

```
double pi = Math.PI;

// Using string interpolation with format specifier
string message = $"The value of pi is approximately {pi:F2}.";

Console.WriteLine(message);
```

In this example, we declare a `pi` variable and create a string `message` using string interpolation with a format specifier that specifies two decimal places. The output of the program would be:

```
The value of pi is approximately 3.14.
```