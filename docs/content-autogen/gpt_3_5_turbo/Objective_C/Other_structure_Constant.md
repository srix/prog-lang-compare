In Objective-C, a constant is a variable whose value cannot be modified once it has been assigned. Constants are declared using the `const` keyword and can be of any data type.

Here is an example of declaring a constant integer:

```
const int MAX_COUNT = 100;
```

In this example, `MAX_COUNT` is a constant integer with a value of 100. This value cannot be modified throughout the program.

Here is another example of multiple constants declared using `#define`:

```
#define PI 3.14159
#define MAX_NAME_LENGTH 50
```

In this example, `PI` is a constant double with a value of 3.14159 and `MAX_NAME_LENGTH` is a constant integer with a value of 50.

Constants can also be used in array declarations. For example:

```
const int numArray[] = {5, 10, 15, 20};
```

In this example, `numArray` is an array of constant integers with values of 5, 10, 15, and 20.

Using constants in Objective-C can help simplify your code by preventing unintentional changes to important values.