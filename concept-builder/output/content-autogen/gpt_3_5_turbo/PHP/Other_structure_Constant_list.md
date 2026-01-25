In PHP, a constant is an identifier, much like a variable, which refers to a fixed value that cannot be altered during the execution of a script. A constant in PHP is defined using the `define()` function.

To create a constant list in PHP, you can define each constant using the `define()` function and separate them with commas. Here's an example:

```
define('FRUIT1', 'Apple');
define('FRUIT2', 'Banana');
define('FRUIT3', 'Orange');
```

This will create three constants: `FRUIT1`, `FRUIT2`, and `FRUIT3`, each with a string value representing a different fruit.

You can then use these constants throughout your code, like this:

```
echo FRUIT1; // Outputs "Apple"
echo FRUIT2; // Outputs "Banana"
echo FRUIT3; // Outputs "Orange"
```

Using constants can make your code more readable and easier to maintain, since you only have to define the value once and then refer to it by name throughout your script. Additionally, since constants cannot be changed during runtime, they provide additional safety and security to your code.