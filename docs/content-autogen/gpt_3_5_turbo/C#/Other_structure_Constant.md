A constant in C# is a value that cannot be changed during the program execution. Constants can be defined using the `const` keyword and are typically used when a value is known at design time and is not expected to change.

Here is an example of declaring a constant in C#:

```
const int MAX_VALUE = 100;
```

In this example, we have declared a constant named `MAX_VALUE` with an integer value of `100`.

Constants can also be used to define string or character values:

```
const string GREETING = "Hello, world!";
const char NEWLINE = '\n';
```

In these examples, we have declared a constant string named `GREETING` with a value of "Hello, world!" and a constant character named `NEWLINE` with a value of a newline character.

Constants can be used in the same way as any other variable in C# code, but the value of a constant cannot be changed once it is set. For example, if we try to assign a new value to `MAX_VALUE`, we will get a compile-time error:

```
MAX_VALUE = 200; // Compile-time error: A constant value cannot be modified
```

Using constants in C# can help to make our code more readable and easier to maintain, especially when we have values that are used repeatedly throughout our program.